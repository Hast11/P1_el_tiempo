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

  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');

  return (
    <div className="App">
      <Header />
      <h2 id="titulo"><b>El tiempo</b></h2>
      <div>Latitud: <input type='number' id="latitud" placeholder={defaultLat} value={defaultLat} onChange={e=>setLatitud(e.target.value)}></input></div>
      <div>Longitud: <input type='number' id="longitud" placeholder={defaultLon} value={defaultLon} onChange={e=>setLongitud(e.target.value)}></input></div>
      <div><button id="buscar">Buscar</button></div>
    </div>
  );
}

export default App;
