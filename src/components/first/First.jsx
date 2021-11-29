import React, { useState } from 'react'
import './first.css'
import styled from 'styled-components'
import Photo1 from '../../img/images/first/photo1.png'
import Photo2 from '../../img/images/first/photo2.png'
import Photo3 from '../../img/images/first/photo1Small.png'
import Photo4 from '../../img/images/first/photo2Small.png'
import Photo5 from '../../img/images/first/photo3Small.png'
import Photo6 from '../../img/images/first/photo4Small.png'
import Cross from '../../img/svg/First/cross.svg'
import Slider from './slider/Slider'
import Images from '../../images.js'
import Second from '../second/Second'

const Photos = styled.div`
    float: right;
`;

const FirstDiv = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
        div:nth-child(0) {
            order: 1;
        }
        div:nth-child(1) {
            order: 2;
            margin-bottom: 35px;
        }
        div:nth-child(2) {
            order: 3;
            margin-bottom: 35px;
        }
    }
`;

const First = () => {

    const [show, setShow] = useState(false)

    return (
        <FirstDiv>
            <div className="first-left">
                <Photos>
                    <img className="first-photo first-photo1fordesktop" src={Photo1} alt="photo1" />
                    <img onClick={() => setShow(true) } className="first-photo-mobile" src={Photo3} alt="photo3" />
                    <img onClick={() => setShow(true) } className="first-photo-mobile first-photo-mobilepadding" src={Photo4} alt="photo4" /> 
                    <p className="first-text">WAVE SURFING</p>
                </Photos>
            </div>
            <div className="first-right">
                <div className="first-right-group">
                    <img className="first-photo first-photo1fordesktop" src={Photo2} alt="photo2" />
                    <img onClick={() => setShow(true) } className="first-photo-mobile" src={Photo5} alt="photo5" /> 
                    <img onClick={() => setShow(true) } className="first-photo-mobile first-photo-mobilepadding" src={Photo6} alt="photo6" /> 
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
            <Second />
        </FirstDiv>
    )
}

export default First
