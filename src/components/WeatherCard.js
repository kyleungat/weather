import React, { useContext } from 'react'
import { DataContext } from '../DataContext';
import {weatherIcon, weatherClass} from '../Utilities';

function WeatherCard({ weather, title }) {
    const dataContext = useContext(DataContext);
    const date = new Date(weather.dt * 1000).toDateString();
    let heading;
    if (title === "today weather"){
        heading = <time>{new Date(weather.dt * 1000).toTimeString().slice(0,5)}</time>;
    } else {
        heading = <><time>{date.slice(3)}</time>
                <p className="date-time">{date.slice(0, 3)}</p></>;
    }
    return (
        <div className={`weather-card ${weather && weatherClass(weather.weather[0].description)}`} onClick={() => {
            document.documentElement.scrollTop = 0;
            dataContext.updateOneWeather(weather);
        }}>
            {heading}
            {weatherIcon(weather.weather[0].description)}
            <p>{weather.weather[0].description}</p>
        </div>
    )
}

export default WeatherCard
