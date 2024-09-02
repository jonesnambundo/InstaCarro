import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between; /* Espaça os textos nas extremidades */
  align-items: center; /* Alinha verticalmente os textos */
  background-color: #f8f8f8;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: ${cores.pretoPassas};
  padding: 32px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`
export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${cores.branca};
  margin-left: 217px;
  margin-right: 216px;
`
