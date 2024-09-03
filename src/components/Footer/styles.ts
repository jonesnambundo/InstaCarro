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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${cores.pretoPassas};
  padding: 32px;
  border-top: 1px solid #ddd;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 32px 0;
  }
`

export const FooterText = styled.p`
  margin: 0;
  font-size: inherit;
  line-height: 24px;
  color: ${cores.branca};
  font-weight: 400;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    text-align: left;

    &:first-child {
      margin-left: 215px;
    }
    &:last-child {
      margin-right: 214px;
    }
  }
`
