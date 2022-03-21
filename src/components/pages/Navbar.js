import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(true)
        } else {
            setButton(false)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
 
    return (
        <>
        <div className="navbar">
            <div className ="navbar-container container">
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-links" activeClassName="nav-links--active" onClick={closeMobileMenu}>
                            about me
                        </NavLink>
                    </li>
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                        <NavLink to="/work" className="nav-links" activeClassName="nav-links--active" onClick={closeMobileMenu}>
                            work
                        </NavLink>
                    </li>
                </ul>
                    
            </div>
        </div>
        </>
    );
}

export default Navbar; 
