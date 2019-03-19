import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <div>
      
      <div className="app-div">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
