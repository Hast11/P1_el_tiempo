import logo from './logo.svg';
import './App.css';
import Resultados from './Resultados';
import Header from './Header';
import {useState} from 'react';
import CONFIG from './config/config';

const USE_SERVER = CONFIG.use_server;

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
