import { Component, h, cloneElement } from 'preact'

export default class SwipeContainer extends Component {

  state = {
    swipe: ''
  }

  tolerance = 100
  gesture = { x: [], y: [], match: '' }

  componentDidMount() {
    this.base.addEventListener('touchstart', this.capture)
    this.base.addEventListener('touchmove', this.capture)
    this.base.addEventListener('touchend', this.compute)
  }

  componentWillUnmount() {
    this.base.removeEventListener('touchstart', this.capture)
    this.base.removeEventListener('touchmove', this.capture)
    this.base.removeEventListener('touchend', this.compute)
  }

  capture = (e) => {
    e.preventDefault()
    this.gesture.x.push(event.touches[0].clientX)
    this.gesture.y.push(event.touches[0].clientY)
  }

  compute = (e) => {
    let xStart = this.gesture.x[0]
    let yStart = this.gesture.y[0]
    let xEnd = this.gesture.x.pop()
    let yEnd = this.gesture.y.pop()
    let xTravel = xEnd - xStart
    let yTravel = yEnd - yStart

    if (xTravel < this.tolerance &&
        xTravel >= this.tolerance &&
        yTravel <= this.tolerance) {
      this.gesture.match = 'up'
    }

    if (xTravel < this.tolerance &&
        xTravel >= this.tolerance &&
        yTravel > this.tolerance) {
      this.gesture.match = 'down'
    }

    if (yTravel < this.tolerance &&
        yTravel >= this.tolerance &&
        xTravel <= this.tolerance) {
      this.gesture.match = 'left'
    }

    if (yTravel < this.tolerance &&
        yTravel >= this.tolerance &&
        xTravel > this.tolerance) {
      this.gesture.match = 'right'
    }

    if (this.gesture.match !== ''){
      this.onSwipe(this.gesture.match)
    }

    this.gesture.x = []
    this.gesture.y = []
    this.gesture.match = ''
  }

  onSwipe = (direction) => {
    if (this.props.onSwipe) {
      this.props.onSwipe(direction)
    }
    this.setState({ swipe: direction })
  }

  render({ children }, state) {
    return cloneElement(children[0], state)
  }
}
