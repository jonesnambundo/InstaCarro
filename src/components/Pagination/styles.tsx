import styled from 'styled-components'

export const PaginationControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 23px; /* Define a distância entre os botões */
  margin-bottom: 317px;

  @media (max-width: 1024px) {
    justify-content: center; /* Centraliza os controles de paginação em telas menores */
  }
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
  width: 42px; /* Define a largura do botão */
  height: 36px; /* Define a altura do botão */
  background-color: ${(props) => (props.isActive ? '#fff' : '#fff')};
  color: #000;
  border: 2px solid transparent; /* Adiciona uma borda transparente inicialmente */
  cursor: pointer;
  border-radius: 4px;
  transition: border-color 0.3s ease, background-color 0.3s ease; /* Transição suave para a borda e fundo */

  &:hover {
    background-color: #fff; /* Mantém o fundo branco ao passar o mouse */
    border-color: #c70505; /* Borda vermelha ao passar o mouse */
  }

  &:disabled {
    background-color: #eee;
    color: #999;
    cursor: not-allowed;
    border-color: transparent; /* Mantém a borda transparente quando desabilitado */
  }
`

export const PaginationImage = styled.img`
  width: 100%;
  height: 100%;
`
