import styled from 'styled-components'

// Example of HeroCard and HeroGrid styling
export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`

export const HeroCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    color: #666;
  }
`
