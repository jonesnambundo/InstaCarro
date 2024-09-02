import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react'

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

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined)

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Hero[]>(() => {
    // Load favorites from local storage on initial render
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    // Save favorites to local storage whenever they change
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

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
