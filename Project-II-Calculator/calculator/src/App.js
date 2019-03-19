import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className = 'main-calculator-div'>
      <CalculatorDisplay />
      <div className='first-row'>
        <ActionButton text = 'clear' />
        <NumberButton text = '&#247;' bgColor = 'red-button'/>
        
      </div>
      <div className='second-row'>
        <NumberButton text = '7' bgColor = 'white-button'/>
        <NumberButton text = '8' bgColor = 'white-button'/>
        <NumberButton text = '9' bgColor = 'white-button'/>
        <NumberButton text = '&#215;' bgColor = 'red-button'/>
      </div>
      <div className='third-row'>
        <NumberButton text = '4' bgColor = 'white-button'/>
        <NumberButton text = '5' bgColor = 'white-button'/>
        <NumberButton text = '6' bgColor = 'white-button'/>
        <NumberButton text = '-' bgColor = 'red-button'/>
      </div>
      <div className='fourth-row'>
        <NumberButton text = '1' bgColor = 'white-button'/>
        <NumberButton text = '2' bgColor = 'white-button'/>
        <NumberButton text = '3' bgColor = 'white-button'/>
        <NumberButton text = '+' bgColor = 'red-button'/>
      </div>
      <div className='fifth-row'>
        <ActionButton text = '0' />
        <NumberButton text = '=' bgColor = 'red-button'/>
      </div>
    </div>
  );
};

export default App;
