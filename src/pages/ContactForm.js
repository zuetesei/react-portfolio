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
                    <p> T: +1 (916) 479-6064 <br></br>
                        E: zuleikatesei@gmail.com
                    </p>
                    <p> Schedule a chat!  </p>
                    <p> Follow me here: </p>
                    <InstaIcon />
                    <PinterestIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <GithubIcon />

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