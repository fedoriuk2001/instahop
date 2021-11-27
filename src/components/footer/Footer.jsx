import React from 'react'
import './footer.css'
import MainLogoBig from '../../img/svg/Footer/main_logo_big.svg'
import Arrow from '../../img/svg/Footer/arrow_down.svg'
import AppleButton from '../../img/svg/Footer/apple_button.svg'
import AndroidButton from '../../img/svg/Footer/android_button.svg'
import Gmail from '../../img/svg/Footer/gmail.svg'
import Facebook from '../../img/svg/Footer/facebook.svg'
import Twitter from '../../img/svg/Footer/twitter.svg'
import Whatsapp from '../../img/svg/Footer/whatsapp.svg'
import Pinterest from '../../img/svg/Footer/pinterest.svg'
import Instagram from '../../img/svg/Footer/instagram.svg'
import Tiktok from '../../img/svg/Footer/tiktok.svg'



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__main">
                <div className="footerdiv footer__firstdiv">
                    <img className="logo" src={MainLogoBig} alt="logo"/>
                </div>
                <div className="footer__secondplusthird">
                    <div className="footerdiv footermobilelist footer__seconddiv">
                        <ul className="footer__links">
                            <li className="footer__element footer__title">
                                <a className="footer__element__link__title footer__element__link__titledesktop">Help & Support</a>
                                <img className="footer__arrow" src={Arrow} alt="downarrow"/>
                            </li>
                           
                            <li className="footer__element footer__first__part">
                                <a className="footer__element__link">Guests</a>
                            </li>
                            <li className="footer__element footer__first__part">
                                <a className="footer__element__link">Hosts</a>
                            </li>
                            <li className="footer__element footer__first__part">
                                <a className="footer__element__link">Frequently Asked Questions</a>
                            </li>
                            <li className="footer__element footer__first__part">
                                <a className="footer__element__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footerdiv footermobilelist footer__thirddiv">
                        <ul className="footer__right">
                            <li className="footer__element footer__title">
                                <a className="footer__element__link__title footer__element__link__titledesktop">Company</a>
                                <img className="footer__arrow" src={Arrow} alt="downarrow"/>
                            </li>
                            <li className="footer__element footer__second__part">
                                <a className="footer__element__link">Safety</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerdiv footer__fourthdiv">
                    <div className="footer__images">
                        <img className="footer__img" src={AppleButton} alt="apple__button"/>
                        <img className="footer__img" src={AndroidButton} alt="android__button"/>
                    </div>
                    <a className="footer__fourthdiv__link">Share with friends!</a>
                    <ul className="footer__circlelist footer__firstcirclelist">
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Gmail} alt="gmail"/>
                            </a>
                        </li>
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Facebook} alt="facebook"/>
                            </a>
                        </li>
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Twitter} alt="twitter"/>
                            </a>
                        </li>
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Whatsapp} alt="whatsapp"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__circlelist footer__secondcirclelist">
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Pinterest} alt="pinterest"/>
                            </a>
                        </li>
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Instagram} alt="instagram"/>
                            </a>
                        </li>
                        <li className="footer__circleelement">
                            <a className="footer__circlelink">
                                <img src={Tiktok} alt="tiktok"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__downdiv">
                <span className="footer__downdiv__span">
                    © hopOhop 2021. All rights reserved.
                </span>
                <ul className="footer__downdiv__list">
                    <li className="footer__downdiv__listelement">
                        <a className="footer__downdiv__link">
                            Privacy
                        </a>
                    </li>
                    <li className="footer__downdiv__listelement">
                        <a className="footer__downdiv__link">
                            Accessibility
                        </a>
                    </li>
                    <li className="footer__downdiv__listelement">
                        <a className="footer__downdiv__link">
                            Terms
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
