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
