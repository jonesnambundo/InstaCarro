import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  SearchBarContainer,
  FavoritesToggle,
  HeroGrid,
  HeroCard,
  HeroImage, // New styled component for image
  SearchIcon,
  SearchInputWrapper,
  SearchInput,
  HeaderBar,
  Subtitle,
  Title,
  ListItem,
  FoundHeroes,
  FavoriteIcon2
} from './styles'
import { FaSearch } from 'react-icons/fa'
import Pagination from '../../components/Pagination/index'
import unfavoriteIcon from '../../assets/img/unfavorite.png'
import favoriteIcon from '../../assets/img/favorito.png'
import { Container } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../../context/index'

interface Hero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

const HomePage: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const navigate = useNavigate()
  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    fetchHeroes()
  }, [search])

  useEffect(() => {
    if (!search) {
      fetchHeroes('spider')
    }
  }, [])

  const fetchHeroes = async (query: string = search) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
    try {
      const response = await axios.get(url)
      setHeroes(response.data.data.results)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  const indexOfLastHero = currentPage * itemsPerPage
  const indexOfFirstHero = indexOfLastHero - itemsPerPage
  const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Container>
      <HeaderBar>
        <Title>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</Title>
        <Subtitle>
          Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
          generosa porção de heróis e vilões!
        </Subtitle>
        <SearchInputWrapper>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Procure por heróis"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchInputWrapper>
      </HeaderBar>

      <SearchBarContainer>
        <ListItem>
          <FoundHeroes>Encontrados {heroes.length} heróis</FoundHeroes>
          <FavoritesToggle onClick={() => navigate('/favorites')}>
            <img src={unfavoriteIcon} alt="Favorite Icon" />
            <span>Somente favoritos</span>
          </FavoritesToggle>
        </ListItem>
      </SearchBarContainer>

      <HeroGrid>
        {currentHeroes.map((hero) => (
          <HeroCard key={hero.id}>
            <HeroImage
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
              onClick={() => navigate(`/character/${hero.id}`)}
            />
            <h3>
              {hero.name}
              <FavoriteIcon2
                src={
                  favorites.some((fav) => fav.id === hero.id)
                    ? unfavoriteIcon
                    : favoriteIcon
                }
                alt="Favorite Icon"
                onClick={(e) => {
                  e.stopPropagation() // Prevent navigation when clicking the favorite icon
                  toggleFavorite(hero)
                }}
              />
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </HeroCard>
        ))}
      </HeroGrid>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={heroes.length}
        paginate={paginate}
      />
    </Container>
  )
}

export default HomePage
