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

  const [latitud, setLatitud] = useState(defaultLat)
  const [longitud, setLongitud] = useState(defaultLon);

  return (
    <div className="App">
      <Header />
      <h2 id="titulo"><b>El tiempo</b></h2>
      <div>Latitud:<input id="latitud" type="number" placeholder={latitud} value={latitud} onChange={e=>setLatitud(e.target.value)}/></div>
      <div>Longitud:<input id="longitud" type="number" placeholder={longitud} value={longitud} onChange={e=>setLongitud(e.target.value)}/></div>
      <div><button id="buscar">Buscar</button></div>
    </div>
  );
}

export default App;
