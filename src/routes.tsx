import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/Home'
import FavoritesPage from '../src/pages/Favorite/FavoritePage'
import { FavoritesProvider } from '../src/context/index'

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}
export default App
