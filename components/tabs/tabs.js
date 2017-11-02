import { Component, h, cloneElement } from 'preact'
import preact from 'preact'

export class Tabs extends Component {
  constructor () {
    super()
		this.handleTabClick = this.handleTabClick.bind(this)
  }

  state = {
    activeTabIndex: 0
  }

  handleTabClick = (tabIndex) => {
    this.setState({activeTabIndex: tabIndex === this.state.activeTabIndex ? this.state.activeTabIndex : tabIndex})
  }

  renderChildrenWithTabsApiAsProps = () => {
      return this.props.children.map((child, index) => {
          return preact.cloneElement(child, {
              click : this.handleTabClick,
              tabIndex: index,
              isActive: index === this.state.activeTabIndex
          })
      })
  }

  renderActiveTabContent = () => {
      const {children} = this.props;
      const {activeTabIndex} = this.state;
      if(children[activeTabIndex]) {
          return children[activeTabIndex].children;
      }
  }

  render({}, {activeTabIndex}) {
    return (
      <div>
        <ul class='tabs'>
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div>
          {this.renderActiveTabContent()}
        </div>
      </div>
    )
  }
}

export default Tabs
