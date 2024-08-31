import { Card, Descricao, Titulo, IconImage } from './styles'
import spiderManImage from '../../assets/img/spider-man.png'
import favoriteImage from '../../assets/img/favorito.png'

const HeroCards = () => (
  <Card>
    <img src={spiderManImage} alt="Hero image" />
    <Titulo>
      Spider Man
      <IconImage src={favoriteImage} alt="favorite" />
    </Titulo>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
      cupiditate unde, iusto expedita nisi placeat doloremque dolorum soluta
      eos, quaerat, excepturi veritatis repudiandae nesciunt. Quidem ipsam
      veniam incidunt quas distinctio!
    </Descricao>
  </Card>
)

export default HeroCards
