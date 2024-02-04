import React from 'react';
import './App.css';
import AutoComplete from './components/autoComplete';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <AutoComplete/>
      </header>
    </div>
  );
}

export default App;