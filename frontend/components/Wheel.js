import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Wheel(props) {

const clockWiseOnClick = () => {
  props.moveClockwise()
}

const counterClockWiseOnClick = () => {
  props.moveCounterClockwise()
}
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.wheelState === 0 ? 'active' : ''}`} 
          style={{ "--i": 0 }}>{props.wheelState === 0 ? 'B' : ''}</div>

        <div className={`cog ${props.wheelState === 1 ? 'active' : ''}`} 
          style={{ "--i": 1 }}>{props.wheelState === 1 ? 'B' : ''}</div>

        <div className={`cog ${props.wheelState === 2 ? 'active' : ''}`} 
          style={{ "--i": 2 }}>{props.wheelState === 2 ? 'B' : ''}</div>

        <div className={`cog ${props.wheelState === 3 ? 'active' : ''}`} 
          style={{ "--i": 3 }}>{props.wheelState === 3 ? 'B' : ''}</div>

        <div className={`cog ${props.wheelState === 4 ? 'active' : ''}`} 
          style={{ "--i": 4 }}>{props.wheelState === 4 ? 'B' : ''}</div>
          
        <div className={`cog ${props.wheelState === 5 ? 'active' : ''}`} 
          style={{ "--i": 5 }}>{props.wheelState === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => counterClockWiseOnClick()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => clockWiseOnClick()}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actions)(Wheel)