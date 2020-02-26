import React from 'react';
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import { IoIosSnow } from "react-icons/io";

export const kelvinToCelsius = (temp) => {
    return Math.round((temp -272.15)*10)/10;
}

export const weatherIcon = (type) => {
    if (type.search(/clear/i) !== -1){
        return <WiDaySunny className="weather-icon"/>
    }
    else if (type.search(/clouds/i) !== -1){
        return <WiCloudy className="weather-icon"/>
    }
    else if (type.search(/rain/i) !== -1){
        return <WiRain className="weather-icon"/>
    }
    else if (type.search(/snow/i) !== -1){
        return <IoIosSnow className="weather-icon"/>
    }
}

export const weatherClass = (type) => {
    if (type.search(/clear/i) !== -1){
        return "clear";
    }
    else if (type.search(/clouds/i) !== -1){
        return "clouds";
    }
    else if (type.search(/rain/i) !== -1){
        return "rain";
    }
    else if (type.search(/snow/i) !== -1){
        return "snow";
    }
}