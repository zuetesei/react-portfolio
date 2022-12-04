import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    // close nav bar at location change
    const location = useLocation();
    useEffect(() => {
        setExpandNavBar(false)
    }, ([location]));

    return (

        <Nav justify variant='tabs' defaultActiveKey="/">


            <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
                <div className='toggleButton'>
                    <button onClick={() => { setExpandNavBar((prev) => !prev); }}> < ReorderIcon /> </button>
                </div>
                <div className='links'>
                    <Link to='/'> Home </Link>
                    <Link to='/projects'> Projects </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                </div>
            </div>

        </Nav>
    );
}

export default Navbar;