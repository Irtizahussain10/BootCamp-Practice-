import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterInput from './components/counterInput.js';
import CounterOutput from './components/counterOutput.js';

function App() {
  return (
    <div className="App">
      <CounterOutput></CounterOutput>
      <br />
      <CounterInput></CounterInput>
    </div>
  );
}

export default App;
