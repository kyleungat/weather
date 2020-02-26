import React, { useState, useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { DataContext} from '../DataContext';

import {weatherClass} from '../Utilities'


function Search({ submitToApp }) {
    const [value, setValue] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const dataContext = useContext(DataContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (value <= 2 ) {
            setErrMsg("Must be more than 2 characters!");
        }
        else {
            setErrMsg('');
            setValue('');
            submitToApp(value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container">
                    <input className="search-input" placeholder="enter the city name" type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <button className={`search-btn ${dataContext.oneWeather && weatherClass(dataContext.oneWeather.weather[0].description)}`} type="submit" ><FaSearch /></button>
            </div>
            <p className="err-msg">{errMsg}</p>
        </form>
    )
}

export default Search
