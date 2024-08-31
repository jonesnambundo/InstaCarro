import styled from 'styled-components'
import { cores } from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = styled.div`
  border-radius: 10px;
  padding: 19px 18px;
  border: 1px solid #c6c6c6;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 24px;
  display: flex; /* Alterado para flex para alinhar o ícone */
  align-items: center;
  margin-top: 20px;
  margin-bottom: 22px;
  line-height: 28px;
`

export const Descricao = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
`

export const IconImage = styled.img`
  margin-left: 64px; /* Distância entre o título e a imagem */
  width: 22px; /* Ajuste o tamanho conforme necessário */
  height: 20x; /* Ajuste o tamanho conforme necessário */
`
