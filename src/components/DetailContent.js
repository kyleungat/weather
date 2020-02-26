import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import {kelvinToCelsius, weatherClass} from '../Utilities'

function DetailContent() {
    const dataContext = useContext(DataContext);

    if (dataContext.cityInfo && dataContext.oneWeather) {
        let rain;
        for (let x in dataContext.oneWeather.rain) {
            rain = dataContext.oneWeather.rain[x];
        }
        let snow;
        for (let x in dataContext.oneWeather.snow) {
            snow = dataContext.oneWeather.snow[x];
        }
        return (
            <div className="detail-content" >
                <table className={`detail-table ${dataContext.oneWeather && weatherClass(dataContext.oneWeather.weather[0].description)}`}>
                    <tbody>
                        <tr>
                            <th>latitude</th>
                            <td>{dataContext.cityInfo.lat}</td>
                        </tr>
                        <tr>
                            <th>longitude</th>
                            <td>{dataContext.cityInfo.lon}</td>
                        </tr>
                        <tr>
                            <th>sun rise</th>
                            <td>{dataContext.cityInfo.sunrise.toTimeString().slice(0,8)}</td>
                        </tr>
                        <tr>
                            <th>sun set</th>
                            <td>{dataContext.cityInfo.sunset.toTimeString().slice(0,8)}</td>
                        </tr>
                        <tr>
                            <th>rain <span>(mm in 3hrs)</span></th>
                            <td>{rain? rain: 0}</td>
                        </tr>
                        <tr>
                            <th>wind <span>(meter/sec | direction)</span></th>
                            <td>{`${dataContext.oneWeather.wind.speed} | ${dataContext.oneWeather.wind.deg}\u00B0`}</td>
                        </tr>
                        <tr>
                            <th>snow</th>
                            <td>{rain? rain: 0}</td>
                        </tr>
                        <tr>
                            <th>maximum temperature <span>{`(\u00B0C)`}</span></th>
                            <td>{kelvinToCelsius(dataContext.oneWeather.main.temp_max)}</td>
                        </tr>
                        <tr>
                            <th>temperature <span>{`(\u00B0C)`}</span></th>
                            <td>{kelvinToCelsius(dataContext.oneWeather.main.temp)}</td>
                        </tr>
                        <tr>
                            <th>minimum temperature <span>{`(\u00B0C)`}</span></th>
                            <td>{kelvinToCelsius(dataContext.oneWeather.main.temp_min)}</td>
                        </tr>
                        <tr>
                            <th>humidity</th>
                            <td>{`${dataContext.oneWeather.main.humidity}%`}</td>
                        </tr>
                        <tr>
                            <th>Atmospheric pressure on the sea level<span>(hPa)</span></th>
                            <td>{dataContext.oneWeather.main.grnd_level}</td>
                        </tr>
                        <tr>
                            <th>Atmospheric pressure on the sea level<span>(hPa)</span></th>
                            <td>{dataContext.oneWeather.main.sea_level}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <div />
        );
    }

}

export default DetailContent
