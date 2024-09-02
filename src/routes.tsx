import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import FavoritesPage from './pages/Favorite/FavoritePage'
import CharacterProfilePage from './pages/CharacterProfile/CharacterProfilePage'
import Footer from './components/Footer'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/character/:id" element={<CharacterProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes
