import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  margin-bottom: 110px;
  text-align: center;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 24px;
`

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  opacity: 60%;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 780px;
  margin: 64px auto 0;
`

export const SearchInput = styled.input`
  width: 780px;
  height: 75px;
  border-radius: 100px;
  background-color: ${cores.coral};
  color: ${cores.coral};
  opacity: 60%;
  border: none;
  font-size: 24px;
  line-height: 28px;
  padding-left: 126px;

  &::placeholder {
    color: rgba(249, 154, 153, 0.8);
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  color: ${cores.vermelho}; /* Cor do ícone */
  font-size: 30px; /* Tamanho do ícone */
  width: 30px;
  height: 30.01px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SearchBarContainer = styled.ul`
  list-style: none; /* Remove os marcadores de lista */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const FavoritesToggle = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    width: 30px;
    height: 26px;
    cursor: pointer;
  }

  span {
    font-size: 24px;
    font-weight: 500;
    color: ${cores.vermelho};
  }
`
export const FoundHeroes = styled.span`
  font-size: 24px;
  color: #c5c5c5;
  font-weight: 500;
`

/**HeloLIST */

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
`

export const HeroCard = styled.div`
  border-radius: 10px;
  border: 1px solid #c6c6c6;
  padding: 19px 18px;
  text-align: left;

  img {
    width: 238px;
    height: 169px;
    border-radius: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }

  p {
    font-size: 14px;
    color: #777;
  }
`

export const FavoriteIcon = styled.div`
  margin-left: 64px; /* Distância entre o título e a imagem */
  width: 22px; /* Ajuste o tamanho conforme necessário */
  height: 20x; /* Ajuste o tamanho conforme necessário */
`

export const PaginationControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#000' : '#ccc')};
  color: #fff;
  border: none;
  margin-left: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#333' : '#aaa')};
  }

  &:disabled {
    background-color: #eee;
    color: #999;
    cursor: not-allowed;
  }
`

export const PaginationImage = styled.img`
  width: 24px;
  height: 24px;
`
