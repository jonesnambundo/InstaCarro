import React from 'react'
import HeroCard from '../HeroCard'
import { List } from './styles'

interface Hero {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface HeroListProps {
  heroes: Hero[]
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <List>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          thumbnail={hero.thumbnail}
          description={hero.description}
        />
      ))}
    </List>
  )
}

export default HeroList
