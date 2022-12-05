import React from 'react';
import EmailIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
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
                    <a href='mailto: zuleikatesei@gmail.com'> <EmailIcon /> </a>
                    <a href='https://github.com/zuetesei' target="_blank" rel="noreferrer"> <GithubIcon /> </a>
                    <a href='https://www.instagram.com/love.zue/' target="_blank" rel="noreferrer"> <InstagramIcon /> </a>
                    <a href='https://www.linkedin.com/in/zuleika-tesei/' target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
                </div>
            </div>
        </div>
    );
}

export default Home;