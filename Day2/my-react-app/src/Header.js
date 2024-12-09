import './Style.css';
import Logo from './img/Logo.png'; // Correctly import the image from the img folder

function Header() {
    return (
        <header className="Header">
            <img src={Logo} alt="Logo" className='header_logo'/>
            <h1 className="Header_title">Welcome to My Website</h1>
        </header>
    );
}

export default Header;
