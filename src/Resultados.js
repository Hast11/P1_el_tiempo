export default function Resultados(props){
    return(
        <div id="resultados">  
            <h2><b>Timezone: {props.items.timezone}</b></h2>
            <h3><b>El tiempo en los próximos días será:</b></h3>
            <ul>
                {props.items.daily.slice(0,props.numItems).map(item => (
                    <li key={item.id}>          
                        <p>{new Date(item.daily.dt*1000).toLocaleDateString}</p>
                        <p><img alt="imagenTiempoDelDia" src="{item.daily.weather[0].icon}.png"></img></p>
                        <p>Temp: {item.daily.temp.day} ºC</p>
                        <p>Humedad: {item.daily.humidity} %</p>
                        <p>Viento: {item.daily.wind_speed} m/s</p>
                    </li>
                ))}
            </ul>
        </div>
    )    
}