import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
  return (
    <div>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Can you solve this puzzle?</h1>
            <p>Solve the following riddle:<br/><br/>A woman is sitting in her room at night. She has no lights on, no candle,
            no lamp, no light at all and yet she is reading. How is that possible?</p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 30 }}
              config={{ duration: 40000 }}
            >
            {props => (
              <div style={props}>
                <h1 style={counter}>
                  {props.number.toFixed()}
                </h1>
              </div>
            )

            }
            </Spring>
          </div>
        </div>
      )}
      </Spring>
    </div>
  )
}

const c1Style = {
  background: 'slategray',
  color: 'white',
  padding: '1.5rem'
}

const counter = {
  background: 'steelblue',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto',
  marginTop: '45px'
}
