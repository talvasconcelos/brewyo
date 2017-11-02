import './style'
import { Component } from 'preact'
import styled from 'styled-components'

import { fetchBeers } from './lib/api'

import SwipeContainer from './components/swipe'
import Beer from './components/beer'
import Recipe from './components/recipe'

const data = require('./data.json')

const SliderContainer = styled.div`
	position: absolute;
	top: ${props => props.pos};
	bottom: 0;
	min-height: 100%;
	width: 100%;
	overflow: hidden;
	background: linear-gradient(-270deg, #136a8a, #267871);
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
		this.toggleRecipe = this.toggleRecipe.bind(this)
  }

	state = {
		fetchPage: 1,
		beers: [],
		currentBeer: 10,
		showRecipe: true
	}

	loadMore = () => {
		this.setState({fetchPage: this.state.fetchPage + 1})
		fetchBeers(`beers?page=${this.state.fetchPage}`)
			.then(r => this.setState({ beers: [...this.state.beers, ...r], beerIndex: this.state.beerIndex + 1 }))
	}

	nextBeer() {
		if(this.state.currentBeer === this.state.beers.length - 1)
			this.loadMore()
		this.state.currentBeer < 234 ? this.setState(this.state.currentBeer++) : null
	}

	prevBeer() {
		this.state.currentBeer == 0 ? null : this.setState(this.state.currentBeer--)
	}

	scrollHandler = (e) => {
		e.deltaY < 0 ? this.prevBeer() : this.nextBeer()
		//e.deltaY < 0 ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	swipeHandler = (direction) => {
		direction === 'down' ? this.prevBeer() :
		direction === 'up' ? this.nextBeer() : null
	}

	toggleRecipe = () => {
		this.setState({showRecipe: !this.state.showRecipe})
	}

	componentDidMount() {
		this.setState({beers: data})
		//fetchBeers(`beers?page=${this.state.fetchPage}`)
		//	.then(r => this.setState({ beers: r }))
	}

	render({}, {beers, currentBeer, showRecipe}) {
		return (
			<div id="app">
				{!showRecipe &&
					<SliderContainer pos={currentBeer * -100 + 'vh'} onWheel={this.scrollHandler}>
						<SwipeContainer onSwipe={this.swipeHandler}>
							<Slider>
								{beers.map(beer => (
									<Beer beer={beer} toggle={this.toggleRecipe}/>
								))}
								{/* <pre>{JSON.stringify({beers}, null, 2)}</pre> */}
							</Slider>
						</SwipeContainer>
					</SliderContainer>}
					{beers.length && showRecipe &&
						<Recipe beer={beers[currentBeer]}/>
					}
			</div>
		)
	}
}
