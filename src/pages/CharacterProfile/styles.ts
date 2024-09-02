import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 51px;
`

export const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const ComicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
  width: 100%;
  align-items: center; /* Centraliza os cards horizontalmente */
`

export const ComicCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1170px;
  height: 263.06px;
`

export const ComicImage = styled.img`
  width: 248px;
  height: 263.06px;
  border-radius: 30px 0px 0px 30px;
  margin-right: 20px;
`

export const ComicDetails = styled.div`
  text-align: left;
  flex-grow: 1;
`

export const ComicName = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`

export const ComicReleaseDate = styled.p`
  font-size: 0.9em;
  color: #666;
`

export const ComicPageCount = styled.p`
  font-size: 0.9em;
  color: #666;
`

export const ComicDescription = styled.p`
  font-size: 0.9em;
  color: #333;
  margin-top: 10px;
`
