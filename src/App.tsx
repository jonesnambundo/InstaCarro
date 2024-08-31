import Footer from './components/Footer'
import Header from './components/Header'
import HeroCards from './components/HerosCard'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <HeroCards />
      </Container>
      <Footer />
    </>
  )
}

export default App
