import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  margin-bottom: 110px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 8px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 30px;
  }
`

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  opacity: 60%;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 780px;
  margin: 64px auto 0;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
    font-size: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    padding: 20px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 780px;
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

  @media (max-width: 768px) {
    &::placeholder {
      font-size: 18px;
      line-height: 12px;
      margin-left: 45px;
    }
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  color: ${cores.vermelho};
  font-size: 30px;
  width: 30px;
  height: 30.01px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SearchBarContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
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

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 12px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      padding: 20px;
    }
  }
`
export const FoundHeroes = styled.span`
  font-size: 24px;
  color: #c5c5c5;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px;
  }
`

/**HeloLIST **Resposnive Cards */

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  margin-bottom: 45px;
  padding: 10px;

  @media (max-width: 468px) {
    grid-template-columns: 1fr; /* 1 coluna para telas até 468px */
  }

  @media (min-width: 469px) and (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas para telas entre 469px e 768px */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 3 colunas para telas entre 769px e 1024px */
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* Ajuste progressivo para telas maiores */
  }
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

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Ajuste para celulares grandes */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Ajuste para celulares pequenos */
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
    transform: scale(1.05);
  }
`
