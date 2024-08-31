import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Footer />
    </>
  )
}

export default App
