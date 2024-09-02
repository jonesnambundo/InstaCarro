import React from 'react'
import { Container } from '../../styles'
import { useFavorites } from '../../context/index'
import { HeroGrid, HeroCard } from '../../pages/Home/styles'

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites()

  return (
    <Container>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>Você não tem heróis favoritos.</p>
      ) : (
        <HeroGrid>
          {favorites.map((hero) => (
            <HeroCard key={hero.id}>
              <img
                className="hero-image"
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
              <h3>{hero.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </HeroCard>
          ))}
        </HeroGrid>
      )}
    </Container>
  )
}

export default FavoritesPage
