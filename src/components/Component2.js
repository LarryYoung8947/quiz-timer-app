import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
  state = {
    result: null,
  }

  onClick = this.onClick.bind(this)

  onClick(e) {
    answer = (document.getElementById('answerBox')).value.match(/braille/g) === null
    ? this.setState({result: 'incorrect'})
    : this.setState({result: 'correct'});
    alert(answer);
    this.props.checkAnswer()
  }



  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
      {props => (
        <div style={props}>
          <div style={c2Style}>
            <h2>Take a guess</h2>
            <form>
              <input name='answer' style={textBoxStyle} type="text" id='answerBox' className="answerBox"
              placeholder='Text goes here...'/><br/>
              <button onClick={this.onClick} type='button' style={btn}>Submit Answer</button>
            </form>
          </div>
        </div>
      )}
      </Spring>
    );
  }
}

const c2Style = {
  background: 'steelblue',
  color: 'white',
  padding: '3rem',
  textAlign: 'center'
}

const textBoxStyle = {
  margin: '1rem',
  width: '50vw'
}

const btn = {
  textAlign: 'center',
  padding: '10px',
  width: '100px',
  background: '#333',
  color: 'white',
  marginTop: '20px',
  borderColor: '#333',
  borderStyle: 'none',
  borderRadius: '5%',
  fontSize: '1em'
}

let answer;

export default Component2;
