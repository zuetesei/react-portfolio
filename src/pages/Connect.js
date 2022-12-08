import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactModal from '../components/ContactModal';
import MyCard from '../components/Card';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import '../styles/Contact.css';

function ContactForm() {

    return (
        <Container className="contact">
            <Row>
                <Col xs={12} md={8}>
                    <MyCard />
                </Col>
                <Col xs={6} md={4}>
                    <h2> Contact. </h2>
                    <div className='contact-info'>
                        <p> <LocalPhoneIcon /> 9164796064 <br></br>
                            <EmailIcon /> zuleikatesei@gmail.com
                        </p>
                        <p> Schedule a <a href='https://calendly.com/zuetesei/30min' target='_blank' rel="noreferrer">chat</a>!  </p>
                    </div>

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