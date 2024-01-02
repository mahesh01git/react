// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  status = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBreaks = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.status
    return (
      <div className="bg-container">
        <div className="content-con">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed">speed is {count}mph</h1>
          <p className="para">min limit is 0mph, max limit is 200mph</p>
          <div>
            <button type="button" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button onClick={this.onBreaks} type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
