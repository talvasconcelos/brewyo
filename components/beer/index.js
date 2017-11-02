import { h } from 'preact'
import styled from 'styled-components'

const Card = styled.div`
	margin: 15vh auto;
	width: 85%;
	max-width: 980px;
	height: 70vh;
	padding: 1em;
	background: #eee;
	border-radius: 3px;
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
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-gap: 1em;
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

const Image = styled.div`
	display: none;
	width: 0;
	@media screen and (min-width: 768px) {
		display: block;
		width: 100%;
		background: url(${props => props.image});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
`

const Value = styled.p`
	text-align: center;
	font-style: italic;
`

const Button = styled.div`
	display: inline-block;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 3em;
	letter-spacing: 1px;
	height: 3em;
	padding: 0 2em;
	margin: 0 auto;
	border: none;
	border-radius: 2px;
	color: #fff;
	background: tomato;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`

const Beer = ({beer, toggle}) => (
    <Card>
      <CardBody>
				<div style='display: grid;'>
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
					<div class='btn-wrapper'/*style='position: absolute; bottom: 0; width: 100%; margin-bottom: 1em; text-align: center;'*/>
						<Button onClick={toggle}>method</Button>
					</div>
				</div>
				<Image image={beer.image_url} />
      </CardBody>
    </Card>
)

export default Beer
