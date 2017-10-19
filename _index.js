import './style'
import { Component } from 'preact'

import { fetchBeers } from './lib/api'
import SwipeContainer from './components/swipe'


import Beer from './components/beer'

export default class App extends Component {
	constructor () {
    super()
		this.showBeerDetails = this.showBeerDetails.bind(this)
  }

	state = {
		fetchPage: 1,
		beers: [],
		beerIndex: 0,
		showDetails: false
	}

	handleClick = (e) => {
		this.setState({showbeer: !this.state.showbeer, beerId: e})
	}

	navClick = e => {
		if(this.state.beerIndex === this.state.beers.length - 1 && this.state.beerIndex < 234)
			this.loadMore()
		e.target.id === 'left' ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	scrollHandler = (e) => {
		if(this.state.beerIndex === this.state.beers.length - 1 && this.state.beerIndex < 234)
			this.loadMore()
		e.deltaY < 0 ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	loadMore = () => {
		this.setState({fetchPage: this.state.fetchPage + 1})
		fetchBeers(`beers?page=${this.state.fetchPage}`)
			.then(r => this.setState({ beers: [...this.state.beers, ...r], beerIndex: this.state.beerIndex + 1 }))
	}

	swipe = (direction) => {
		if(this.state.beerIndex === this.state.beers.length - 1 && this.state.beerIndex < 234)
			this.loadMore()
		direction === 'up' || direction ===  'down' ? null :
		direction === 'right' ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	showBeerDetails = () => {
		this.setState({showDetails: !this.state.showDetails})
	}

	componentDidMount() {
		fetchBeers(`beers?page=${this.state.fetchPage}`)
			.then(r => this.setState({ beers: r }))
	}

	render({}, {beers, beerIndex, ...state}) {
		return (
			<div id="app">
				{(!state.showDetails && beers.length) &&
					<SwipeContainer onSwipe={this.swipe}>
						<div class='wrapper' /*onWheel={this.scrollHandler}*/>
							<span id='left' class='navigate nav-left' onClick={this.navClick}>&#10092;</span>
							<span id='right' class='navigate nav-right' onClick={this.navClick}>&#10093;</span>
										<Beer beers={beers} i={beerIndex} method={this.showBeerDetails}/>
						</div>
					</SwipeContainer>
				}
				{state.showDetails &&
					<h1>{beers[beerIndex].name}</h1>
				}
			</div>
		)
	}
}
