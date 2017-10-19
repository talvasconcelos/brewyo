import { h } from 'preact'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin: 1em auto 0;
  position: relative;
  width: 85%;
  max-width: 768px;
`

const Card = styled.div`
  background: #fff;
  min-height: 60vh;
  position: relative;
  display: block;
  border-radius: 5px;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100%;
  }
`

const CardBody = styled.div`
  display: grid;
  grid-template-rows: 3fr 0.75fr 0.25fr;
  padding: 2em;
`

const Image = styled.div`
  display: none;
  width: 0;
  transition: display 0.3s ease;

  @media screen and (min-width: 768px) {
    display: block;
    width: auto;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 1em;
  }
`

const Button = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background: tomato;
  padding: 1em;
  margin: 0 auto;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`

const Beer = ({beers, i, method}) => (
  <CardContainer>
    <Card>
      <CardBody>
        <div>
          <h1 class='h2'>{beers[i].name}</h1>
          <h4>{beers[i].tagline}</h4>
          <p class='clamped'>{beers[i].description}</p>
        </div>

          <Details>
            <div>
              <h4>ABV</h4>
              <p>{beers[i].abv}</p>
            </div>
            <div>
              <h4>IBU</h4>
              <p>{beers[i].ibu}</p>
            </div>
            <div>
              <h4>SRM</h4>
              <p>{beers[i].srm}</p>
            </div>
          </Details>
          <Button onClick={method}>Method</Button>
      </CardBody>
      <Image url={beers[i].image_url} />
    </Card>
  </CardContainer>
)
/*const Beer = ({beers, i}) => (
  <div>
    <Card>
      <div class='clamp'>
        <Id>#{beers[i].id}</Id>
        <h2 style='font-family: Montserrat, sans-serif;'>{beers[i].name}</h2>
        <strong>{beers[i].tagline}</strong>
        <p class='clamp'>{beers[i].description}</p>
      </div>
      <Details>
        <div>
          <strong>ABV: </strong>
          <span>{beers[i].abv}</span>
        </div>
        <div>
          <strong>IBU: </strong>
          <span>{beers[i].ibu}</span>
        </div>
        <div>
          <strong>SRM: </strong>
          <span>{beers[i].srm}</span>
        </div>
      </Details>
      <div class='btn-wrapper'>
        <Button>Method</Button>
      </div>
    </Card>
  </div>
)*/

export default Beer
