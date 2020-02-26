import React, {useContext} from 'react'
import Temperature from './Temperature';
import {DataContext} from '../DataContext';
import {weatherIcon} from '../Utilities';

function MainContent() {
    const dataContext = useContext(DataContext);

    if (dataContext.cityInfo && dataContext.oneWeather) {
        return (
            <div className="main-content">
                <h2>{dataContext.cityInfo.name}</h2>
                <h3>{dataContext.oneWeather.weather[0].description}</h3>
                {weatherIcon(dataContext.oneWeather.weather[0].description)}
                <Temperature value={Math.round((dataContext.oneWeather.main.feels_like -272.15)*10)/10}/>
                <time>{new Date(dataContext.oneWeather.dt * 1000).toString().slice(0,21)}</time>
            </div>
        )
    }
    return null;
}

export default MainContent
