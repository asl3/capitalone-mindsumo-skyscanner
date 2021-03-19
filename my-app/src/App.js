import React from 'react';
import './App.css';
import AirportInfo from './components/AirportInfo.js';
import Quotes from './components/Quotes.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AirportInfo />
      <Quotes />
    </div>
  );
}

export default App;