import './style'
import { Component } from 'preact'
import styled from 'styled-components'

import { fetchBeers } from './lib/api'

// import SwipeContainer from './components/swipe'
import Beer from './components/beer'


const data = require('./data.json')

const SliderContainer = styled.div`
	position: absolute;
	top: ${props => props.pos};
	bottom: 0;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	background: tomato;
	transition: top 0.3s ease;
`

const Slider = styled.div`
	display: grid;
	width: 100%;
`

export default class App extends Component {
	constructor () {
    super()
		this.swipeHandler = this.swipeHandler.bind(this)
  }

	state = {
		beers: [],
		currentBeer: 0
	}

	nextBeer() {
		this.setState(this.state.currentBeer++)
	}

	prevBeer() {
		this.state.currentBeer == 0 ? null : this.setState(this.state.currentBeer--)
	}

	scrollHandler = (e) => {
		e.deltaY < 0 ? this.prevBeer() : this.nextBeer()
		// if(this.state.beerIndex === this.state.beers.length - 1 && this.state.beerIndex < 234)
		// 	this.loadMore()
		//e.deltaY < 0 ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	swipeHandler = (direction) => {
		direction === 'down' ? this.prevBeer() :
		direction === 'up' ? this.nextBeer() : null
	}

	componentDidMount() {
		this.setState({beers: data})
	}

	render({}, {beers, currentBeer}) {
		return (
			<div id="app">
				<SliderContainer pos={currentBeer * -100 + 'vh'} onWheel={this.scrollHandler}>
					{/* <SwipeContainer onSwipe={this.swipeHandler}> */}
						<Slider>
								{beers.map(beer => (
									<Beer beer={beer} swipe={this.swipeHandler}/>
								))}
							{/* <pre>{JSON.stringify({beers}, null, 2)}</pre> */}
						</Slider>
					{/* </SwipeContainer> */}
				</SliderContainer>
			</div>
		)
	}
}
