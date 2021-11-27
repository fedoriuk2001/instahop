import React from 'react'
import './header.css'
import MainLogo from '../../img/svg/Header/main_logo.svg'
import MainLogoMobile from '../../img/svg/Header/main_logo_mobile.svg'
import AppleLogo from '../../img/svg/Header/apple_logo.svg'
import AndroidLogo from '../../img/svg/Header/android_logo.svg'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={MainLogo} alt="logo"/> 
            <img className="logo_mobile" src={MainLogoMobile} alt="logo"/>
            <nav>
                <ul className="nav__links">
                    <li className="nav__element">
                        <a className="nav__element__link">Home</a>
                    </li>
                    <li className="nav__element">
                        <a className="nav__element__link nav__link__button">Cancun</a>
                    </li>
                    <li className="nav__element">
                        <a className="nav__element__link">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <ul className="nav__right">
                <li className="nav__right__item"><a><img src={AppleLogo} alt="apple-logo"/></a></li>
                <li className="nav__right__item"><a><img src={AndroidLogo} alt="android-logo"/></a></li>
            </ul>
            <div className="nav__right__mobile">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
};

export default Header;