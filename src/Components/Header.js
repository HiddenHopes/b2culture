import './Header.css';
import b2 from '../b2.png';

function Header() {
    return(
        <div className='header'>
            <div className="row">
                <div className='col-sm-3'>
                    <img src={b2} alt='b2 logo'/>
                </div>
                <div className='col-sm-9'>
                    <div className='row topbar'>
                        <div className='col-sm-6'>
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
                        <div className='col-sm-6'>Log in</div>
                    </div>
                    <div className='row menubar'>
                        <ul className="menu">
                            <li className="menu-btn">Home</li>
                            <li className="menu-btn">Literature</li>
                            <li className="menu-btn">Books</li>
                            <li className="menu-btn">Students</li>
                            <li className="menu-btn">About Us</li>
                            <li className="menu-btn">Contact</li>
                        </ul>
                        <div class="form">
                            <form role="search" method="get" class="search-form" action="https://buywptemplates.com/demo/bwt-coupon-pro/"/>
                                <input type="hidden" name="post_type" value="party">
                                <input type="search" class="search-field text-start" placeholder="Search Coupons..." value="" name="s">
                                <button type="submit" class="search-submit">
                                <span className="screen-reader-text">Search</span>
                                <span>
                                <i class=" fa fa-search" aria-hidden="true"></i>
                            </span>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Header;