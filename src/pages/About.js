import React from 'react';
// import { Link } from 'react-router-dom';
import MyCard from '../components/Card';
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
                    <MyCard />

                </Col>

                {/* big col - portrait */}
                <Col xs={12} md={8}>
                    <div className='aboutme'>
                        <p>
                            👋🏾 My name is Zuleika.
                            <br></br>
                            <br></br>
                            👩🏽‍💻 I'm Software Engineer based in Sacramento, CA with special interests in UX design
                            and frontend development.
                            {/* I have experience with HTML, CSS, JavaScript, ExpressJS, Node.js, Handlebars, MySQL, Sequelize and MongoDB. */}
                            <br></br>
                            <br></br>
                            🇵🇼 I was born in <a href="https://www.google.com/maps/place/Palau/@5.439037,133.0442,7z/data=!3m1!4b1!4m5!3m4!1s0x328445b4a2af0399:0x12ed1edd39a1ebbb!8m2!3d7.51498!4d134.58252" target="_blank" rel="noreferrer"> Palau
                            </a>, my family's island home.
                            <br></br>
                            <br></br>
                            🧑🏽‍🎓 I earned my BA in Politics, Philosophy, and Economics from the King’s College in NYC.
                            <br></br>
                            <br></br>
                            🧡 I am passionate about spending time with family, adventure, self-improvement, and making a positive impact through my work.
                            <br></br>
                            <br></br>
                            🤝 I'm looking for opportunities as a Junior Software Engineer, Front End Developer, or React Developer.
                        </p>
                        <div className='skills'>
                            <h4> Skills </h4>
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
                    </div>
                </Col>


            </Row >
        </Container >
    )
}
export default About;