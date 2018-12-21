import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Card suit="D" rank="10" />
        <Card suit="H" rank="5" />
        <Card suit="S" rank="K" />
        <Card suit="C" rank="K" />
        
      </div>
    );
  }
}

export default App;
