import React from 'react'
import {
  HeroCardContainer,
  Title,
  Description,
  Image,
  IconImage
} from './styles'
import favoriteImage from '../../assets/img/favorito.png'

interface HeroCardProps {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
  description: string
}

const HeroCard: React.FC<HeroCardProps> = ({
  id,
  name,
  thumbnail,
  description
}) => {
  return (
    <HeroCardContainer>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      <Title>{name}</Title>
      <IconImage src={favoriteImage} alt="favorite" />
      <Description>{description}</Description>
    </HeroCardContainer>
  )
}

export default HeroCard
