import './style'
import { Component } from 'preact'

import { fetchBeers } from './lib/api'
import SwipeContainer from './components/swipe'


import Beer from './components/beer'

export default class App extends Component {
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
		console.log(e.target.accessKey)
		if(this.state.beerIndex === this.state.beers.length - 1 && this.state.beerIndex < 234)
			this.loadMore()
		e.target.id === 'left' ? this.state.beerIndex == 0 ? null : this.setState({beerIndex: this.state.beerIndex - 1}) : this.state.beerIndex == this.state.beers.length - 1 ? null : this.setState({beerIndex: this.state.beerIndex + 1})
	}

	handleKeyDown = e => {
		e.preventDefault()
		console.log(e)
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

	swipe = () => {
		console.log('jjj')
	}

	componentDidMount() {
		fetchBeers(`beers?page=${this.state.fetchPage}`)
			.then(r => this.setState({ beers: r }))
	}

	render({}, {beers, beerIndex, ...state}) {
		return (
			<div id="app">
				<SwipeContainer>
					<div class='wrapper' onWheel={this.scrollHandler} onSwipe={this.swipe}>
						<span id='left' class='navigate nav-left' onClick={this.navClick}>&#10092;</span>
						<span id='right' class='navigate nav-right' onClick={this.navClick}>&#10093;</span>
						{(!state.showDetails && beers.length) &&
							<Beer beers={beers} i={beerIndex}/>
						}
					</div>
				</SwipeContainer>
			</div>
		)
	}
}
