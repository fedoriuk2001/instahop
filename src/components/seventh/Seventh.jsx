import React from 'react'
import './seventh.css'
import Beautiful from '../../img/images/seventh/style1.png'

const Seventh = () => {
    return (
        <div className="seventh">
            <div className="seventh-first">
                <img src={Beautiful} alt="beautiful"/>
                <span className="seventh-title">Reviews</span>
                <img src={Beautiful} alt="beautiful"/>
            </div>
            <div className="seventh-second">
                <div className="seventh-firstcol">
                    <div className="seventh-firstfirst">
                        <span className="seventh-element">Enjoyment Level</span>
                        <div className="seventh-line">
                            <div className="seventh-orange1"></div>
                            <div className="seventh-gray1"></div>
                        
                        <span className="seventh-element seventh-elementend">5.0</span>
                        </div>
                    </div>
                    <div className="seventh-firstsecond">
                        <span className="seventh-element">Expectations Met</span>
                        <div className="seventh-line">
                            <div className="seventh-orange2"></div>
                            <div className="seventh-gray2"></div>
                        
                        <span className="seventh-element seventh-elementend">5.0</span>
                        </div>
                    </div>
                </div>
                <div className="seventh-secondcol">
                    <div className="seventh-firstfirst seventh-firstfirstspace">
                        <span className="seventh-element">Local's Point of View</span>
                        <div className="seventh-line">
                            <div className="seventh-orange3"></div>
                            <div className="seventh-gray3"></div>
                        
                        <span className="seventh-element seventh-elementend">4.5</span>
                        </div>
                    </div>
                    <div className="seventh-firstsecond seventh-firstsecondpaddingbottom">
                        <span className="seventh-element">Refer to a Friend</span>
                        <div className="seventh-line">
                            <div className="seventh-orange4"></div>
                            <div className="seventh-gray4"></div>
                    
                        <span className="seventh-element seventh-elementend">5.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventh
