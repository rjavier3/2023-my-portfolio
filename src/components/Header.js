import imgLogo from '../assets/images/logo.webp';
import { useState } from 'react';


function Header(){
    const [navColor, setNavColor] = useState(false)
    const [menuIcon, setMenuIcon] = useState(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
        </svg>
    )
    const [isActive, setIsactive] = useState(false)

    const toggleMenu = () => {
        if(isActive === false){
            setIsactive(true)
            setMenuIcon(
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M30 24.398l-8.406-8.398 8.406-8.398-5.602-5.602-8.398 8.402-8.402-8.402-5.598 5.602 8.398 8.398-8.398 8.398 5.598 5.602 8.402-8.402 8.398 8.402z"></path>
                </svg> 
            )
        } else{
            setIsactive(false)
            setMenuIcon(
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
                </svg>
            )
        }

    }

    const changeNavBackground = () =>{
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setNavColor(true)
        } 
        else {
            setNavColor(false)
        }
    }

    window.addEventListener('scroll',changeNavBackground)

    return(
        <header className={navColor ? 'header-colored' : 'header-transparent'}>
            <div>
                <a href="/">
                    <img width="100" height="100" className="logo" src={imgLogo} alt="logo"/>
                </a>
            </div>
            <nav>
                <ul className={isActive ? '' : 'hidden'}>
                    <li><a href="#works" onClick={toggleMenu}>Websites</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
            <div className="menu-icons-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuIcon}
                </div>
            </div>
        </header>
    );
}

export default Header;