import './Header.css';
import b2 from '../../images/b2.png';
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../Translations/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
    const {t} = useTranslation();
    return(
        <div className='header'>
            <div className="row">
                <div className='col-sm-3 b2culture'>
                    <img src={b2} alt='b2 logo' className='b2culture-logo'/>
                </div>
                <div className='col-sm-9'>
                    <div className='row topbar'>
                        <div className='col-lg-5'>
                            <a className="social_icon" href="#%20" target="_blank">
                                <i className="fab fa-instagram align-middle"></i>
                            </a>
                            <a className="social_icon" href="#%20" target="_blank">
                                <i className="fab fa-pinterest-p align-middle"></i>
                            </a>
                            <a className="social_icon" href="#%20" target="_blank">
                                <i className="fab fa-twitter align-middle"></i>
                            </a>
                        </div>
                        <div className='col-lg-5'>
                            <a className="social_icon login-btn" href="#%20" target="_blank">
                                <i className='fas fa-sign-in-alt me-2'></i>
                                Log in
                            </a>
                        </div>
                        <div className='col-lg-2'>
                            <LanguageSwitcher/>
                        </div>
                    </div>
                    <div className='row menubar'>
                        <div className='col-sm-7'>
                            <ul className="menu">
                                <li><Link to="/" className='menu-btn'>{t('home')}</Link></li>
                                <li><Link to="/services" className='menu-btn'>{t('service_title')}</Link></li>
                                <li><Link to="/contact" className='menu-btn'>{t('contact_title')}</Link></li>
                                <li><Link to="/about" className='menu-btn'>{t('about_title')}</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <div className="search-container">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit">
                                <span><i className=" fa fa-search" aria-hidden="true"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;