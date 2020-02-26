import React, { useState, useContext } from 'react'
import Tab from './Tab'
import MainContent from './MainContent'
import DetailContent from './DetailContent'
import { DataContext } from '../DataContext';
import { weatherClass } from '../Utilities'

function MainViewContainer() {
    const [isMain, setIsMain] = useState(true);

    const dataContext = useContext(DataContext);

    return (
        <section className={`main-view ${dataContext.oneWeather && weatherClass(dataContext.oneWeather.weather[0].description)}`} >
            <div className="tab-container">
                <Tab onClick={() => setIsMain(true)} title={"main"} isActive={isMain} />
                <Tab onClick={() => setIsMain(false)} title={"details"} isActive={!isMain} />
            </div>
            <div className="main-display">
                {isMain ? <MainContent /> : <DetailContent />}
            </div>
        </section>
    )
}

export default MainViewContainer
