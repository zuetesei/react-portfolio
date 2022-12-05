import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactModal from '../components/ContactModal';
import InstaIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';

import '../styles/Contact.css';

function ContactForm() {

    return (
        <Container className="contact">
            <Row>
                <Col xs={12} md={8}>
                    <h2> Contact. </h2>
                    <div className='contact-info'>
                        <p> T: +1 (916) 479-6064 <br></br>
                            E: zuleikatesei@gmail.com
                        </p>
                        <p> Schedule a chat!  </p>
                        <p> Follow me here: </p>
                    </div>
                    <a href='https://www.instagram.com/love.zue/' target="_blank" rel="noreferrer"> <InstaIcon /> </a>
                    <a href='https://www.pinterest.com/internationalzue/' > <PinterestIcon /> </a>
                    <a href='https://twitter.com/thenationalzue' > <TwitterIcon /> </a>
                    <a href='https://www.linkedin.com/in/zuleika-tesei/' target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
                    <a href='https://github.com/zuetesei' target="_blank" rel="noreferrer"> <GithubIcon /> </a>

                </Col>
                <Col xs={6} md={4}>
                    <h3> Leave a Note. </h3>
                    <div className="modalBtn">
                        <ContactModal />
                    </div>

                </Col>
            </Row>
        </Container >

    )
}
export default ContactForm;