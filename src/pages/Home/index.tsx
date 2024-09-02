import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  SearchBarContainer,
  FavoritesToggle,
  HeroGrid,
  HeroCard,
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
  const [search, setSearch] = useState<string>('') // Keep it empty to start with
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8 // Number of heroes per page

  useEffect(() => {
    fetchHeroes()
  }, [search])

  useEffect(() => {
    if (!search) {
      fetchHeroes('spider') // Fetch default heroes when the page loads and no search term is provided
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

  // Pagination Logic
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
          <FavoritesToggle>
            <img
              src={unfavoriteIcon}
              alt="Favorite Icon"
              onClick={() => setOnlyFavorites(!onlyFavorites)}
            />
            <span>Somente favoritos</span>
          </FavoritesToggle>
        </ListItem>
      </SearchBarContainer>

      <HeroGrid>
        {currentHeroes.map((hero) => (
          <HeroCard key={hero.id}>
            <img
              className="hero-image"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
            <h3>
              {hero.name}
              <FavoriteIcon2
                src={favoriteIcon}
                alt="Favorite Icon"
                onClick={() => setOnlyFavorites(!onlyFavorites)}
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
