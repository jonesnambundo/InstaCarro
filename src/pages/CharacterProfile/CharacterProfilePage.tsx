import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  BannerContainer,
  ProfileContainer,
  HeroDetailsCard,
  HeroImage,
  HeroDetails,
  HeroName,
  HeroDescription,
  ComicList,
  ComicCard,
  ComicImage,
  ComicDetails,
  ComicName,
  ComicReleaseDate,
  ComicPageCount,
  ComicDescription
} from './styles'
import { BarLoader } from 'react-spinners'

// Tipos para Hero e Comic
interface Comic {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
  dates: { type: string; date: string }[]
  pageCount: number
  description: string
}

interface Hero {
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: Comic[]
}

const CharacterProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [comics, setComics] = useState<Comic[]>([])
  const [hero, setHero] = useState<Hero | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchHeroAndComics()
  }, [id])

  const fetchHeroAndComics = async () => {
    const comicUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=5&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
    const heroUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`

    try {
      const [comicResponse, heroResponse] = await Promise.all([
        axios.get(comicUrl),
        axios.get(heroUrl)
      ])

      const comicsData = comicResponse.data.data.results.map((comic: any) => ({
        id: comic.id,
        title: comic.title,
        thumbnail: comic.thumbnail,
        dates: comic.dates,
        pageCount: comic.pageCount,
        description: comic.description || 'No description available.'
      }))

      const heroData = heroResponse.data.data.results[0]
      const heroInfo: Hero = {
        name: heroData.name,
        description: heroData.description || 'No description available.',
        thumbnail: heroData.thumbnail,
        comics: comicsData
      }

      setHero(heroInfo)
      setComics(comicsData)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <BarLoader color="#00B1E9" width="100%" />
  }

  return (
    <>
      {hero && (
        <BannerContainer
          url={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        >
          <span>
            DESCUBRA TODOS OS <br /> QUADRINHOS <br /> DESTE PERSONAGEM
          </span>
        </BannerContainer>
      )}
      <ProfileContainer>
        {hero && (
          <HeroDetailsCard>
            <HeroImage
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
            <HeroDetails>
              <HeroName>{hero.name}</HeroName>
              <HeroDescription>{hero.description}</HeroDescription>
            </HeroDetails>
          </HeroDetailsCard>
        )}
        <ComicList>
          {comics.map((comic) => (
            <ComicCard key={comic.id}>
              <ComicImage
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <ComicDetails>
                <ComicName>{comic.title}</ComicName>
                <ComicReleaseDate>
                  Release Date:{' '}
                  {new Date(
                    comic.dates.find((date) => date.type === 'onsaleDate')
                      ?.date || ''
                  ).toLocaleDateString()}
                </ComicReleaseDate>
                <ComicPageCount>Page Count: {comic.pageCount}</ComicPageCount>
                <ComicDescription>
                  {comic.description.substring(0, 200)}...
                </ComicDescription>
              </ComicDetails>
            </ComicCard>
          ))}
        </ComicList>
      </ProfileContainer>
    </>
  )
}

export default CharacterProfilePage
