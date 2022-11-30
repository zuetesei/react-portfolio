import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import selfPortrait from '../assets/profile-pic.png';
import '../styles/Home.css'

function Home() {
    return (
        <div className='Home'>
            <div className='about'>
                <img src={selfPortrait} alt='Zue in Ngermid' />
                <h2> I'm Zue </h2>
                <div className='prompt'>
                    <p> I design. I build things. I care about the Earth. </p>
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