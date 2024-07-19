// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  ButtonClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">The button has been clicked {count} times.</h1>
        <p className="description">Click The button to increase the count!</p>
        <button className="Button" onClick={this.ButtonClicked}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
