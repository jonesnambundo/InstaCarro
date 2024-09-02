import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  ProfileContainer,
  HeroImage,
  ComicList,
  ComicCard,
  ComicImage,
  ComicDetails,
  ComicName,
  ComicReleaseDate,
  ComicPageCount,
  ComicDescription
} from './styles'

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

const CharacterProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    fetchComics()
  }, [id])

  const fetchComics = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=5&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
    try {
      const response = await axios.get(url)
      setComics(response.data.data.results)
    } catch (error) {
      console.error('Error fetching comics', error)
    }
  }

  return (
    <ProfileContainer>
      <HeroImage
        src={`https://gateway.marvel.com:443/v1/public/characters/${id}/thumbnail`}
        alt="Hero Image"
      />
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
                {comic.description
                  ? comic.description.substring(0, 200) + '...'
                  : 'No description available.'}
              </ComicDescription>
            </ComicDetails>
          </ComicCard>
        ))}
      </ComicList>
    </ProfileContainer>
  )
}

export default CharacterProfilePage
