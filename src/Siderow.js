import React from 'react'
import './siderow.css'
function Siderow({title,Logo,isSelected}) {
    return (
        <div className={`siderow ${isSelected && 'selected'}`}>
            <Logo />
            <h3>{title}</h3>
        </div>
    )
}

export default Siderow
