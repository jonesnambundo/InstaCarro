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
  position: relative;
  top: -200px;
  left: 0;
  position: absolute;

  span {
    margin-left: 520px;
  }

  @media (max-width: 768px) {
    height: 300px;
    font-size: 25px;
    top: -100px;

    span {
      margin-top: 80px;
      margin-left: 60px;
    }
  }

  @media (max-width: 1024px) {
    height: 300px;
    font-size: 30px;
    top: -100px;

    span {
      margin-top: 80px;
      margin-left: 60px;
    }
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 51px;
  margin-top: 420px;
  width: 100%;
  max-width: 1170px;
  margin: -5px auto;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 30px;
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`

export const HeroDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 339px;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 212px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`
export const HeroDetails = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: justify;
  }
`

export const HeroName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`

export const HeroDescription = styled.p`
  font-size: 20px;
  color: ${cores.pretoPassas};
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ComicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${cores.pretoPassas};

  @media (max-width: 768px) {
    gap: 30px;
  }
`

export const ComicCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 263.06px;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 30px;
    height: auto;
    padding: 20px;
  }
`

export const ComicImage = styled.img`
  width: 248px;
  height: 263.06px;
  border-radius: 30px 0px 0px 30px;
  margin-right: 54px;

  @media (max-width: 768px) {
    width: 200px;
    height: 212px;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    transition: transform 0.3s ease;
    display: block;
  }
`

export const ComicDetails = styled.div`
  text-align: left;
  flex-grow: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ComicName = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 35px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`

export const ComicReleaseDate = styled.p`
  font-size: 18px;
  color: ${cores.pretoPassas};
  line-height: 21px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ComicPageCount = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  color: ${cores.pretoPassas};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ComicDescription = styled.p`
  font-size: 18px;
  color: ${cores.pretoPassas};
  margin-top: 10px;
  font-weight: 400;
  margin-bottom: 24px;
  line-height: 24px;
  margin-right: 100px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 0;
  }
`
