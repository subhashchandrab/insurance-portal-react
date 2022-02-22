import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return 			<header className="site-header">
    <div className="top-header">
        <div className="container">
            <a href="index.html" id="branding">
                <img src="images/logo.png" alt="Company Name" className="logo"/>
                <div className="logo-text">
                    <h1 className="site-title">Acme Insurance</h1>
                    <small className="description">Get Insured.. Be Rest Assured..</small>
                </div>
            </a> 
        
            <div className="right-section pull-right">
                <a href="#" className="phone"><img src="images/icon-phone.png" className="icon"/>+91 
                123 456 7891</a>
        
            </div>
        </div> 

    
    <div className="bottom-header">
        <div className="container">
            <div className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                    <li className="menu-item"><Link to='/'>Products</Link></li>
                    <li className="menu-item"><Link to='/quote'>Quotes</Link></li>
                    <li className="menu-item"><Link to='/about'>Contact Us</Link></li>
                </ul> 
            </div> 
            
            <div className="social-links">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
            </div>
            
        </div>
    </div>
    
    </div>
    
</header>

}

export default MainNavigation;
