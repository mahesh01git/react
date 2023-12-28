// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="content-con">
          <h1>SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png alt should be speedometer"
            alt="speedometer"
          />
          <h>speed is {0}mph</h>
          <p>min limit is 0mph, max limit is 200mph</p>
          <div>
            <button type="button">Accelerate</button>
            <button type="button">Apply breaks</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
