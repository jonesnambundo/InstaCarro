import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [hero, setHero] = useState<any>(null)

  useEffect(() => {
    const fetchHero = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
      try {
        const response = await axios.get(url)
        setHero(response.data.data.results[0])
      } catch (error) {
        console.error('Error fetching hero data', error)
      }
    }

    fetchHero()
  }, [id])

  if (!hero) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{hero.name}</h1>
      <img
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <p>{hero.description}</p>
    </div>
  )
}

export default CharacterProfilePage
