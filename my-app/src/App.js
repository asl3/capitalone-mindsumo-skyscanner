import React from 'react';
import './App.css';
import AirportInfo from './components/AirportInfo.js';
import Places from './components/Places.js';

function App() {
  return (
    <div className="App">
      <h1>header</h1>
      <AirportInfo />
      <Places />
    </div>
  );
}

export default App;