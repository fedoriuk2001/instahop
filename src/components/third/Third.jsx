import React from 'react'
import './third.css'
import Guides from "../../img/images/third/guides.png"
import GuidesSmall from "../../img/images/third/guidessm.png"
import Emojis from "../../img/images/third/emoji_group.png"
import Lighthing from "../../img/images/third/lightning1.png"
import Dollar from "../../img/images/third/dollar1.png"
import Car from "../../img/images/third/car1.png"
import Time from "../../img/svg/Third/time.svg"
import Route from '../../img/images/third/route.png'
import Start from '../../img/images/third/start.png'
import Finish from '../../img/images/third/finish.png'
import Arrow from '../../img/images/third/arrow.png'


const Third = () => {
    return (
        <div className="third">
            <div className="third-center">
                <div className="third-left">
                    <div className="third-first-line">
                        <img className="third-guide" src={Guides} alt="Guides"/>
                        <img className="third-guidesmall" src={GuidesSmall} alt="Guides_small"/>
                        <img className="third-secondpart" src={Emojis} alt="Emojis"/>
                    </div>
                    <div className="third-second-line">
                        <div className="third-second-first">
                            <div className="third-second-first-first">
                                <span className="third-links"><img className="third-links-img" src={Lighthing} alt="lightning"/>Available instantly</span>
                                <span className="third-links paddingleft19"><img className="third-links-img" src={Dollar} alt="dollar"/>Starting from $25 p/person</span>
                                <span className="third-links"><img className="third-links-img" src={Car} alt="car"/>Private transport</span>
                                <span className="third-links paddingleft22"><img className="third-links-img" src={Time} alt="time"/>4 hours</span>
                            </div>
                        </div>
                        <div className="third-second-second">
                            <span className="third-second-second-49">4.9</span>
                        </div>
                    </div>
                    <div className="third-third-line">
                        <p className="third-title">We care about your safety</p>
                        <p className="third-text third-guide">We care about your safety.  Our hosts will be wearing face masks while in transportation and in all indoor facilities. Their vehicles are sanitized daily. Please pay attention to public and local Covid regulations.</p>
                        <p className="third-text third-guidesmall">The Skyride Gondola is your ticketto the top of Grouse Mountain where year-round adventures await you. I will meet you in front of Starbucks at the bottom of Grouse and give you your discounted tickets. You can explorethe mountain with the tickets.</p>

                    </div>
                </div>
                <div className="third-right">
                    <img src={Route}/>
                    <div className="third-routehelp">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
