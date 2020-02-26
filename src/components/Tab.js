import React from 'react'

function Tab({onClick, title, isActive}) {
    return (
        <div onClick={onClick} className={isActive? "tab active": "tab"}>
            <h3>{title}</h3>
        </div>
    )
}

export default Tab
