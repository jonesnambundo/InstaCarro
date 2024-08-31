import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  width: 1600px;
  height: 82px;
  position: absolute;
  top: 1718px;
  background-color: ${cores.pretoPassas};
  color: ${cores.branca};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 215px;
`
export const FooterText = styled.p`
  width: 373px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  margin: 0;
  padding: 32px;

  &:first-child {
    padding-top: 32px;
  }
`
