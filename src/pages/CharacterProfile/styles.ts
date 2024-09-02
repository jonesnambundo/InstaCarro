import styled from 'styled-components'
import { cores } from '../../styles'

interface BannerContainerProps {
  url: string
}

export const BannerContainer = styled.div<BannerContainerProps>`
  width: 100%;
  height: 578px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  color: ${cores.branca};
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  position: relative; /* Garantir que o banner fique na posição correta */
  top: -200px;
  left: 0;

  span {
    margin-left: 520px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza verticalmente */
  padding: 20px;
  gap: 51px;
  margin-top: -375px;
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`

export const HeroDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  height: 339px;
  border-radius: 30px;
  padding: 20px;
  width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const HeroImage = styled.img`
  width: 200px;
  height: 212px;
  border-radius: 50%;
  margin-right: 39px;
  margin-left: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const HeroDetails = styled.div`
  text-align: left;
`

export const HeroName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 22px;
`

export const HeroDescription = styled.p`
  font-size: 20px;
  color: ${cores.pretoPassas};
  font-weight: 400;
  line-height: 24px;
`

export const ComicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
  width: 80%;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${cores.pretoPassas};
`

export const ComicCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 263.06px;
`

export const ComicImage = styled.img`
  width: 248px;
  height: 263.06px;
  border-radius: 30px 0px 0px 30px;
  margin-right: 54px;
`

export const ComicDetails = styled.div`
  text-align: left;
  flex-grow: 1;
`

export const ComicName = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 35px;
`

export const ComicReleaseDate = styled.p`
  font-size: 18px;
  color: ${cores.pretoPassas};
  line-height: 21px;
`

export const ComicPageCount = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  color: ${cores.pretoPassas};
`

export const ComicDescription = styled.p`
  font-size: 18px;
  color: ${cores.pretoPassas};
  margin-top: 10px;
  font-weight: 400;
  margin-bottom: 24px;
  line-height: 24px;
`
