import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Hero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface FavoritesContextProps {
  favorites: Hero[]
  toggleFavorite: (hero: Hero) => void
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
)

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [favorites, setFavorites] = useState<Hero[]>([])

  const toggleFavorite = (hero: Hero) => {
    if (favorites.find((fav) => fav.id === hero.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== hero.id))
    } else {
      setFavorites([...favorites, hero])
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
