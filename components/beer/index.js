import { h } from 'preact'
import styled from 'styled-components'

// import SwipeContainer from '../swipe'

const Card = styled.div`
	margin: 15vh auto;
	width: 85%;
	height: 70vh;
	padding: 1em;
	background: #eee;
`

const CardBody = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const Title = styled.div`
  font-size: 0.8rem;
`

const Beer = ({beer}) => (
    <Card>
      <CardBody>
        <Title>
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
        </Title>
        <article>{beer.description}</article>
      </CardBody>
    </Card>
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
