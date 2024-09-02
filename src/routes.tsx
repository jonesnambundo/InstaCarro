import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/Home'
import FavoritesPage from '../src/pages/Favorite/FavoritePage'
import CharacterProfilePage from './pages/CharacterProfile/CharacterProfilePage'
import { FavoritesProvider } from '../src/context/index'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import { AppContainer, ContentWrapper } from '../src/components/Footer/styles' // Supondo que você salve os estilos aqui

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <GlobalCss />
        <AppContainer>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/character/:id" element={<CharacterProfilePage />} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </AppContainer>
      </Router>
    </FavoritesProvider>
  )
}

export default App
