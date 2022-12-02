import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Typed from 'react-typed';
import Photo from '../assets/home.png';
import '../styles/Home.css'

function Home() {
    return (
        <div className='Home'>
            <div className='about'>
                <img src={Photo} />
                <div>
                    <h2> Zuleika Tesei </h2>
                    <h3> Software Engineer </h3>
                </div>
                <Typed
                    strings={[
                        "I design efficient user interfaces",
                        "I build cool programs",
                        "I care about the planet",
                    ]}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                />
                <div className='prompt'>
                    <EmailIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className='skills'>
                <h1> Skills </h1>
                <ol className='list'>
                    <li className='item'>
                        <h2> Front-End </h2>
                        <span> React, Bootstrap </span>
                    </li>
                    <li className='item'>
                        <h2> Back-End </h2>
                        <span> JavaScript, Node.js </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;