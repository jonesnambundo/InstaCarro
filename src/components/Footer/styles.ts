import styled from 'styled-components'
import { cores } from '../../styles'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const ContentWrapper = styled.div`
  flex: 1;
  padding-bottom: 32px;
`

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between; /* Espaça os textos nas extremidades */
  align-items: center; /* Alinha verticalmente os textos */
  background-color: ${cores.pretoPassas};
  padding: 32px;
  border-top: 1px solid #ddd;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  @media (max-width: 1024px) {
    flex-direction: column; /* Empilha os textos */
    font-size: 10px;
  }
`
export const FooterText = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  color: ${cores.branca};
  margin-left: 350px;
  margin-right: 260px;

  &:not(:last-child) {
    margin-bottom: 10px; /* Adiciona espaçamento entre os textos quando empilhados */
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    margin-left: 0;
    margin-right: 0;
  }
`
