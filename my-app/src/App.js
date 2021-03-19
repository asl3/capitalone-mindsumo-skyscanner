import React from 'react';
import './App.css';
import AirportInfo from './components/AirportInfo.js';
import Places from './components/Places.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AirportInfo />
      <Places />
    </div>
  );
}

export default App;