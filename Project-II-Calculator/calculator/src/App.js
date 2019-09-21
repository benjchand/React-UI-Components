import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ButtonRow from './components/ButtonComponents/ButtonRow.js';

const App = () => {
  return (
    <div className = 'main-calculator-div'>
      <CalculatorDisplay />

      <div className="first-row">
        <ButtonRow>
          <ActionButton text = 'clear' />
          <NumberButton text = '&#247;' bgColor = 'red-button'/>
        </ButtonRow >
      </div>

      <div className='second-row'>
        <ButtonRow>
          <NumberButton text = '7' bgColor = 'white-button'/>
          <NumberButton text = '8' bgColor = 'white-button'/>
          <NumberButton text = '9' bgColor = 'white-button'/>
          <NumberButton text = '&#215;' bgColor = 'red-button'/>
        </ButtonRow>
      </div>

      <div className='third-row'>
        <ButtonRow>
          <NumberButton text = '4' bgColor = 'white-button'/>
          <NumberButton text = '5' bgColor = 'white-button'/>
          <NumberButton text = '6' bgColor = 'white-button'/>
          <NumberButton text = '-' bgColor = 'red-button'/>
        </ButtonRow>
      </div>

      <div className='fourth-row'>
        <ButtonRow>
          <NumberButton text = '1' bgColor = 'white-button'/>
          <NumberButton text = '2' bgColor = 'white-button'/>
          <NumberButton text = '3' bgColor = 'white-button'/>
          <NumberButton text = '+' bgColor = 'red-button'/>
        </ButtonRow>
      </div>

      <div className='fifth-row'>
        <ButtonRow>
          <ActionButton text = '0' />
          <NumberButton text = '=' bgColor = 'red-button'/>
        </ButtonRow>
      </div>
    </div>
  );
};

export default App;
