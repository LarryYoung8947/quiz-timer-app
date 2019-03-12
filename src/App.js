import React, { Component } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import { Transition, animated } from 'react-spring/renderprops';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showComponent3: false }
  }

  checkAnswer = this.checkAnswer.bind(this)

  checkAnswer() {
    alert('answer checked!')
    this.setState({ showComponent3: true })
  }

  displayMessage() {
    message === 'correct' ? this.setState({message: 'Correct'})
    : this.setState({message: 'Incorrect'});
  }

  render() {
    return (
      <div className="App">
        <Component1/>
        <Component2 checkAnswer={this.checkAnswer}/>
        <Transition
          native
          items={this.state.showComponent3}
          from={{opacity: 0}}
          enter={{opacity: 1}}
          leave={{opacity: 0}}>
          {show => show && (props => (
            <animated.div style={props}>
              <Component3 message={this.state.displayMessage}/>
            </animated.div>
          ))}
        </Transition>
      </div>
    );
  }
}

let message;
export default App;
