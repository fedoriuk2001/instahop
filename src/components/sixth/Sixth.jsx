import React from 'react'
import './sixth.css'
import Photo1 from '../../img/images/sixth/couple-tourists-with-backpacks-mountain.png'
import Photo2 from '../../img/images/sixth/side-view-man-with-binocular.png'
import Photo3 from '../../img/images/sixth/backpack-with-sunset.png'

const Sixth = () => {
    return (
        <div className="sixth">
            <div className="sixth-block">
                <div className="sixth-first">
                    <img src={Photo1}/>
                </div>
                <div className="sixth-second">
                    <span className="sixth-title">What’s included</span>
                    <ul className="sixth-list">
                        <li className="sixth-listitem1"><span>Tour of local secret spots</span></li>
                        <li className="sixth-listitem1"><span>The best beachfront in the area</span></li>
                        <li className="sixth-listitem1"><span>Knowledgeable Host</span></li>
                        <li className="sixth-listitem1"><span>Scenic Views of the beautiful<br/>Playa Del Carmen</span></li>
                    </ul>
                </div>
            </div>
            <div className="sixth-block">
                <div className="sixth-first">
                    <img src={Photo2}/>
                </div>
                <div className="sixth-second">
                    <span className="sixth-title">What to expect</span>
                    <ul className="sixth-list">
                        <li className="sixth-listitem2"><span>This experience involves a long Bicycle Ride</span></li>
                        <li className="sixth-listitem2"><span>Bicycle Rental: We have two options: City Bicyles and Renting from a store. Please contact your host for details.</span></li>
                        <li className="sixth-listitem2"><span>"Food and Beverage" are not included. We don't want to limit your choices.</span></li>
                    </ul>
                </div>
            </div>
            <div className="sixth-block">
                <div className="sixth-first">
                    <img src={Photo3}/>
                </div>
                <div className="sixth-second">
                    <span className="sixth-title">Bring with you</span>
                    <ul className="sixth-list">
                        <li className="sixth-listitem3"><span>Sunscreen & Sunglasses</span></li>
                        <li className="sixth-listitem3"><span>Swimsuit & Towels</span></li>
                        <li className="sixth-listitem3"><span>Appropriate footwear & Face-Mask</span></li>
                        <li className="sixth-listitem3"><span>An appetite</span></li>
                        <li className="sixth-listitem3"><span>Camera & Cellphone (To rent City bicycles)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sixth
