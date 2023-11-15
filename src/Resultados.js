export default function Resultados(props){
    return(
        <div id="resultados">  
            <h2><b>Timezone: {props.items.timezone}</b></h2>
            <h3><b>El tiempo en los próximos días será:</b></h3>
            <ul>
                {props.items.daily.slice(0,props.numItems).map((item,index) => (
                    <li key={index}>          
                        <p>{new Date(item.dt * 1000).toLocaleDateString("en-IE")}</p>
                        <p><img className="tiempoimg" src={"/"+ item.weather[0].icon + "@2x.png"} alt="Imagen de ${item.dt}"/></p>
                        <p>Temp: {(item.temp.day/10).toFixed(2)} ºC</p>
                        <p>Humedad: {item.humidity} %</p>
                        <p>Viento: {item.wind_speed} m/s</p>
                    </li>
                ))}
            </ul>
        </div>  ) 
}