import React, { useContext } from 'react'
import Chart from "react-google-charts";
import { DataContext } from '../DataContext';
import { kelvinToCelsius } from '../Utilities'

function WeatherChart({ kind }) {
    const dataContext = useContext(DataContext);

    let data;
    let options;

    switch (kind) {
        case "temperature":
            data = dataContext.allArr.map((element, index) => {
                return [
                    index,
                    // kelvinToCelsius(element.main.temp_max),
                    kelvinToCelsius(element.main.temp),
                    // kelvinToCelsius(element.main.temp_min),
                ]
            });
            // data.unshift(['x', 'max_temperature', 'avg_temp', 'min_temperature']);
            data.unshift(['x', 'avg_temp']);
            options = {
                hAxis: {
                    title: 'days after',
                },
                vAxis: {
                    title: 'Temperature (\u00B0C)',
                },
            };
            break;
        case "humidity":
            data = dataContext.allArr.map((element, index) => {
                return [
                    index,
                    element.main.humidity,
                ]
            });
            data.unshift(['x', 'humidity']);
            options = {
                hAxis: {
                    title: 'days after',
                },
                vAxis: {
                    title: 'Humidity (%)',
                },
                series: {
                    0: { curveType: 'function' },
                },
            };
            break;
        case "winds":
            data = dataContext.allArr.map((element, index) => {
                return [
                    index,
                    element.wind.speed,
                ]
            });
            data.unshift(['x', 'winds']);
            options = {
                hAxis: {
                    title: 'days after',
                },
                vAxis: {
                    title: 'winds speed (m/s)',
                },
                series: {
                    0: { curveType: 'function' },
                },
            };
            break;
        case "rain":
            data = dataContext.allArr.map((element, index) => {
                let temp;
                if (element.rain){
                    for (let x in element.rain){
                        temp = element.rain[x];
                    }; 
                }
                temp = 0;
                return [
                    index,
                    temp,
                ]
            });
            data.unshift(['x', 'rain']);
            console.log(data);
            options = {
                hAxis: {
                    title: 'days after',
                },
                vAxis: {
                    title: 'Rain (mm)',
                },
                series: {
                    0: { curveType: 'function' },
                },
            };
            break;
        default:
    };


    return (
        <div className="chart">
            <Chart
                width={'800px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default WeatherChart
