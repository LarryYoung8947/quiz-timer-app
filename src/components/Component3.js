import React, { Component } from 'react';
import { Transition, config } from 'react-spring/renderprops';

export class Component3 extends Component {
  render() {
    return (
      <div style={c3Style}>
        <h1>{this.props.message}</h1>
        <p>To try a different puzzle, please press the 'Reload' button at the bottom of the page!</p>
      </div>
      )
  }

}

let color = 'black';

const c3Style = {
  position: 'absolute',
  textAlign: 'center',
  padding: '1.5rem',
  color: `${color}`,
  fontSize: '1.5em',
  background: 'lightgray',
  top: '150px'
}

export default Component3;
