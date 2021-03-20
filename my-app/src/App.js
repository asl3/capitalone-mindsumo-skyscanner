import React from 'react';
import './App.css';
import AirportInfo from './components/AirportInfo.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AirportInfo />
      <Footer />
    </div>
  );
}

export default App;