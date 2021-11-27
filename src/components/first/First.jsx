import React, { useState } from 'react'
import './first.css'
import Photo1 from '../../img/images/first/photo1.png'
import Photo2 from '../../img/images/first/photo2.png'
// import Photo3 from '../../img/images/first/photo3Small.png'
// import Photo4 from '../../img/images/first/photo4Small.png'
import Cross from '../../img/svg/First/cross.svg'
import Slider from './slider/Slider'
import Images from '../../images.js'

const First = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="first">
            <div className="first-left">
                <div className="first-left-group">
                    <img className="first-photo" src={Photo1} alt="photo1" />
                    {/* <img className="first-photo first-photo-mobile" src={Photo3} alt="photo3" /> */}
                    <p className="first-text">WAVE SURFING</p>
                </div>
            </div>
            <div className="first-right">
                <div className="first-right-group">
                    <img className="first-photo" src={Photo2} alt="photo2" />
                    {/* <img className="first-photo first-photo-mobile" src={Photo4} alt="photo4" /> */}
                    <button onClick={() => setShow(true) } className="first-showall" type="button"><span>Show All Photos</span></button>
                    <p className="first-text">WAVE SURFING</p>
                </div>
            </div>
            
                {
                    show ? <div className="first-slider">
                                <img onClick={() => setShow(false)} className="first-cross" src={Cross}/>
                                <Slider images={Images}/>
                            </div> 
                    : null
                }
            
        </div>
    )
}

export default First
