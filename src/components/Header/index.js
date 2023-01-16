import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialdata } from '../../content_options';
import Themetoggle from '../ThemeToggle';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../../assets/zue-logo.png';
// import ToggleMode from '../../assets/moon.png';

function Headermain() {

    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle('ovhidden');
    }

    return (
        <>
            <header className='fixed-top site-header'>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link className='navbar-brand nav-ac' to='/'> {logotext} </Link>

                    <div className='d-flex align-items-center'>
                        <Themetoggle />
                        <button className="menu-button nav-ac" onClick={handleToggle}>
                            {!isActive ? <VscClose /> : <VscGrabber />}
                        </button>
                    </div>
                </div>

                <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
                    <div className="bg__menu h-100">
                        <div className="menu__wrapper">
                            <div className="menu__container p-3">
                                <ul className="the_menu">
                                    <li className="menu_item ">
                                        <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                        <div className="d-flex">
                            <a href={socialdata.instagram}>Instagram</a>
                            <a href={socialdata.github}>Github</a>
                            <a href={socialdata.linkedin}>LinkedIn</a>
                        </div>
                        <p className="copyright m-0">copyright {logotext}</p>
                    </div>
                </div>
            </header>

            <div className="br-top"></div>
            <div className="br-bottom"></div>
            <div className="br-left"></div>
            <div className="br-right"></div>
        </>

    );
}

export default Headermain;