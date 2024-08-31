import {
  HeaderBar,
  Subtitle,
  Title,
  SearchInputWrapper,
  SearchInput,
  SearchIcon
} from './styles'
import { FaSearch } from 'react-icons/fa'

const Header = () => (
  <HeaderBar>
    <Title>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</Title>
    <Subtitle>
      Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
      generosa porção de heróis e vilões!
    </Subtitle>
    <SearchInputWrapper>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <SearchInput type="text" placeholder="Procure por heróis" />
    </SearchInputWrapper>
  </HeaderBar>
)

export default Header
