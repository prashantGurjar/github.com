import { Link } from 'react-router-dom';
import logo from '../assets/images/fungi_logo.png';



const Header = () => {

    return (
        
        <header>
            <div className='container'>
                <div className="navbar_wrapper">
                    <div className="nav_logo">
                        {/* <img src={logo} /> */}
                        <h1>Personal website</h1>
                    </div>
                    <div className="nav_item_wrapper">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/About"}>About</Link></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;