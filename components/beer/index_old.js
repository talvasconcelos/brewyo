import { h } from 'preact'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  display: block;
  margin-top: 3em;
  height: 100%;
  width: 90vw;
  max-width: 780px;
  background: #fff;
  background-position: -50px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 1em 1em 4em 1em rgba(53,80,91,0.8);

  @media screen and (min-width: 768px) {
    /*background: #fff url('./assets/img/hops-2.png');
    background-position: -50px;
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 12em;*/
    min-height: 66vh;
	}
`

const Id = styled.h1`
  font-family: beerId;
  font-size: 6em;
  letter-spacing: 0.05em;
  color: #f8a732;
  position: absolute;
  top: -60px;
  left: 0;
  margin: 0;
  transform: rotate(-15deg);
  text-shadow: 0 0 2em rgba(53,80,91,0.8);
`

const Button = styled.a`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 1.1em;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  background: tomato;
  padding: 1em 0.75em;
`

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em auto;
  font-size: 1.1em;

  @media screen and (min-width: 768px) {

	}
`

const Beer = ({beers, i}) => (
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
)

export default Beer
