import styled from 'styled-components'

export const PaginationControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#000' : '#ccc')};
  color: #fff;
  border: none;
  margin-left: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#333' : '#aaa')};
  }

  &:disabled {
    background-color: #eee;
    color: #999;
    cursor: not-allowed;
  }
`

export const PaginationImage = styled.img`
  width: 24px;
  height: 24px;
`
