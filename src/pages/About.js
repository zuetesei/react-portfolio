import React from 'react';
import AboutMe from '../assets/about.png';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/About.css';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function About() {

    return (
        <Container className='about'>
            <Row>
                <Col xs={6} md={4}>

                    <div className='skills'>
                        <h1> Skills </h1>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Frontend </Accordion.Header>
                                <AccordionBody> HTML, CSS, Bootstrap, Bulma, JavaScript, React, React Bootstrap</AccordionBody>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" alwaysOpen>
                                <Accordion.Header> Backend </Accordion.Header>
                                <AccordionBody> HTML, CSS, Bootstrap, Bulma, JavaScript, React, React Bootstrap</AccordionBody>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div>
                        Check out my latest projects <i> here</i>.
                    </div>
                </Col>

                {/* big col - portrait */}
                <Col xs={12} md={8}>
                    <div className='about-photo'>
                        <img src={AboutMe} alt='Zue portrait' />

                        <div className='socials'>
                            <EmailIcon />
                            <LinkedInIcon />
                            <GithubIcon />
                            <InstagramIcon />
                        </div>

                    </div>

                    <div className='aboutme'>
                        <p>
                            My name is Zuleika Tesei and I am Software Engineer based in Sacramento, CA with a specific interest in UX design
                            and frontend development. I have experience with HTML, CSS, JavaScript, ExpressJS, Node.js, Handlebars, MySQL, Sequelize and MongoDB.
                            <br></br>
                            <br></br>

                            I have a background in administrative work. I was born in Palau, raised in Sacramento, and earned my BA in Politics, Philosophy, and Economics
                            from the King’s College in NYC. I worked government roles for Palau, learning about the nation's efforts in environmental
                            conservation and the global climate change fight.
                            <br></br>
                            <br></br>

                            I am seeking to work with a team that xyz...

                        </p>
                    </div>
                </Col>


            </Row >
        </Container >
    )
}
export default About;