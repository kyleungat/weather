import React, {useState} from 'react'

function Temperature({value}) {
    const [isCelsius, setIsCelsius] = useState(true);

    return (
        <div onClick={() => {setIsCelsius(!isCelsius)}} className="temperature">
            {isCelsius? value: Math.round( (value * 1.8 + 32)*10)/10}
            {isCelsius? "\u00B0C" : "\u00B0F"}
        </div>
    )
}

export default Temperature
