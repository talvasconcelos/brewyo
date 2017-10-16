import { h } from 'preact'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  display: block;
  min-height: 66vh;
  height: 100%;
  width: 90vw;
  max-width: 780px;
  background: #fff;
  margin-top: 4em;
  margin-bottom: 2em;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 1em 1em 4em rgba(53,80,91,0.8);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1em;
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

const Details = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background: tomato;
	}
`

const Beer = ({beers, i}) => (
  <div>
    <Card>
      <div class='clamp'>
        <Id>#{beers[i].id}</Id>
        <h2 style='font-family: Montserrat, sans-serif;'>{beers[i].name}</h2>
        <i>{beers[i].tagline}</i>
        <p class='clamp'>{beers[i].description}</p>
      </div>
      <div style='background: pink;'>

      </div>
    </Card>
  </div>
)

export default Beer
