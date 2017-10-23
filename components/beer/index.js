import { h } from 'preact'
import styled from 'styled-components'

const Card = styled.div`
	margin: 15vh auto;
	width: 85%;
	max-width: 980px;
	height: 70vh;
	padding: 1em;
	background: #eee;
	/*@media screen and (min-width: 768px) {
		width: 75%;
	}*/
`

const CardBody = styled.article`
  display: block;
  position: relative;
  width: 100%;
	height: 100%;

	@media screen and (min-width: 768px) {
		width: 67%;
	}
`

const Title = styled.div`
  font-size: 0.8rem;
`

const Details = styled.div`
	border-top: 1px solid gainsboro;
	border-bottom: 1px solid gainsboro;
	display: flex;
	justify-content: space-around;
`

const Value = styled.p`
	text-align: center;
	font-style: italic;
`

const Button = styled.a`
	display: inline-block;
	text-transform: uppercase;
	line-height: 3em;
	vertical-align: middle;
	letter-spacing: 1px;
	height: 3em;
	padding: 0 2em;
	margin: 0 auto;
	border: none;
	border-radius: 2px;
	color: #fff;
	background: tomato;
	-webkit-tap-highlight-color: transparent;
`

const Beer = ({beer}) => (
    <Card>
      <CardBody>
        <Title>
          <h2 class='clamped-title'>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
        </Title>
        <p class='clamped'>{beer.description}</p>
				<Details>
					<div>
						<h5>ABV</h5>
						<Value class='text-center'>{beer.abv}%</Value>
					</div>
					<div>
						<h5>IBU</h5>
						<Value class='text-center'>{beer.ibu}</Value>
					</div>
					<div>
						<h5>SRM</h5>
						<Value class='text-center'>{beer.srm}</Value>
					</div>
				</Details>
				<div style='position: absolute; bottom: 0; width: 100%; margin-bottom: 1em; text-align: center;'>
					<Button>method</Button>
				</div>
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
