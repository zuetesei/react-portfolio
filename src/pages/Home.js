import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Typed from 'react-typed';
import '../styles/Home.css'

function Home() {
    return (
        <div className='Home'>
            <div className='about-home'>
                <div>
                    <h2> Zuleika Tesei </h2>
                    <h3> Software Engineer </h3>
                </div>
                <Typed
                    className='intro-typed'
                    strings={[
                        "I design beautiful UIs",
                        "DRY code",
                        "I care about the Earth",
                    ]}
                    typeSpeed={150}
                    backSpeed={250}
                    loop
                />
                <div className='prompt'>
                    <EmailIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
            </div>
        </div>
    );
}

export default Home;