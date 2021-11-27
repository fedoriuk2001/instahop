import React from 'react'
import './second.css'
import Location from '../../img/svg/Second/location.svg'

const Second = () => {
    return (
        <div className="second">
            <p className="second-title">Super Advantour of Wave Surfing</p>
            <p className="second-subtitle">Here’s a tagline example to show the tagline example</p>
            <p className="second-address"><img src={Location}/>Vancouver, BC</p>
        </div>
    )
}

export default Second
