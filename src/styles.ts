import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  preta: '#212121',
  pretoPassas: '#202020',
  brancaFumaca: '#F5F5F5',
  vermelho: '#F43735',
  coral: '#F99A9933',
  branca: '#FFFFFF',
  cinzaClaro: '#C5C5C5'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
  background-color: ${cores.brancaFumaca};
  color: ${cores.preta};
  padding-top: 182px;
}
`
export const Container = styled.div`
  max-width: 1197px;
  width: 100%;
  margin: 0 auto;
`
