import './Header.css';
import b2 from '../b2.png';

function Header() {
    return(
        <div className='header'>
            <div className="row">
                <div className='col-sm-3 b2culture'>
                    <img src={b2} alt='b2 logo' className='b2culture-logo'/>
                </div>
                <div className='col-sm-9'>
                    <div className='row topbar'>
                        <div className='col-lg-6'>
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
                        <div className='col-lg-6'>
                            <a className="social_icon login-btn" href="#%20" target="_blank">
                                <i className='fas fa-sign-in-alt me-2'></i>
                                Log in
                            </a>
                        </div>
                    </div>
                    <div className='row menubar'>
                        <div className='col-sm-7'>
                            <ul className="menu">
                                <li className="menu-btn">Home</li>
                                <li className="menu-btn">Literature</li>
                                <li className="menu-btn">Books</li>
                                <li className="menu-btn">Students</li>
                                <li className="menu-btn">About Us</li>
                                <li className="menu-btn">Contact</li>
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