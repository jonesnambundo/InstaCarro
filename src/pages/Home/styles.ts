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
    margin-right: 20px;
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
  margin-bottom: 45px;
`

export const HeroCard = styled.div`
  border-radius: 10px;
  border: 1px solid #c6c6c6;
  padding: 19px 18px;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 238px;
    height: 169px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 22px;
  }

  p {
    font-size: 16px;
    color: #777;
    font-weight: 400;
  }
`

export const FavoriteIcon2 = styled.img`
  max-width: 22px;
  max-height: 19px;
  margin-left: auto;
  cursor: pointer;
  align-self: flex-start;
`
export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the image on hover */
  }
`
