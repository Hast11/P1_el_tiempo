import logo from './logo.svg';
import './App.css';
import Resultados from './Resultados';
import Header from './Header';
import {useState} from 'react';
import CONFIG from './config/config';
import { mock1 } from './constants/mock';
import Error from './Error';

const USE_SERVER = CONFIG.use_server;
const url = CONFIG.server_url;
const defaultLat = CONFIG.default_lat
const defaultLon = CONFIG.default_lon;
const numItems = CONFIG.num_items;
var aux = true;


function App() {

  const [latitud, setLatitud] = useState(defaultLat)
  const [longitud, setLongitud] = useState(defaultLon);
  const [resultado, setResultado] = useState(null);

  const callServer = async (param) => {
    if(USE_SERVER){
      try{
        let queryparams ="";
        queryparams = "?lat=" + latitud + "&lon=" + longitud + "&appid=" + CONFIG.api_key;
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        if (response.status===200){
          aux = true;
          const data = await response.json(); 
          setResultado(data);
        }
        else{
          const data = await response.json(); 
          setResultado(data);
          aux = false;
          <Error/>
        }
      }
      catch(error){
        <div>
          Error {setResultado({error: {description: error.message}})}
        </div>
      }
    }
    else{
      setResultado(mock1);
    }
  }

  return (
    <div className="App">
      <Header />
      <h2 id="titulo"><b>El tiempo</b></h2>
      <div>Latitud:<input id="latitud" type="number" placeholder={latitud} value={latitud} onChange={e=>setLatitud(e.target.value)}/></div> {/* Importante que el value es el estado, no el default */}
      <div>Longitud:<input id="longitud" type="number" placeholder={longitud} value={longitud} onChange={e=>setLongitud(e.target.value)}/></div>
      <div><button id="buscar" onClick={()=>callServer()}>Buscar</button></div>
      {(resultado && aux) && <Resultados numitems={numItems} items={resultado}/>}
      {!aux && <Error error={resultado}/>}
    </div>
  );
}

export default App;
