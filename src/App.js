import logo from './logo.svg';
import './App.css';
import Resultados from './Resultados';
import Header from './Header';
import {useState} from 'react';
import CONFIG from './config/config';

const USE_SERVER = CONFIG.use_server;
const url = CONFIG.server_url;
const defaultLat = CONFIG.default_lat
const defaultLon = CONFIG.default_lon;
const numItems = CONFIG.num_items;


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
