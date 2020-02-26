import React, {useState} from 'react'
import Tab from './Tab';
import WeatherChart from './WeatherChart';

function WeatherChartContainer() {
    const [tab, setTab] = useState("temperature");

    return (
        <div className="chart-container">
            <div className="tab-container">
                <Tab onClick={() => {setTab("temperature")}} title={"temperature"} isActive={tab === "temperature"} />
                <Tab onClick={() => {setTab("humidity")}} title={"humidity"} isActive={tab === "humidity"} />
                <Tab onClick={() => {setTab("winds")}} title={"winds"} isActive={tab === "winds"} />
                <Tab onClick={() => {setTab("rain")}} title={"rain"} isActive={tab === "rain"} />
            </div>
            <WeatherChart kind={tab} />
        </div>
    )
}

export default WeatherChartContainer
