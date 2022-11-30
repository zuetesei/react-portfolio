import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ContactForm() {

    return (
        <Container>
            <Row>
                <Col>
                    <h2> Contact Info </h2>
                    <p> T: +1(916)479-6064 <br></br>
                        E: zuleikatesei@gmail.com
                    </p>
                </Col>
                <Col>
                    <h3> Or leave me a message below! </h3>
                </Col>
            </Row>


            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder='Your Name' />
                    </Col>
                    <Col>
                        <Form.Control placeholder='Email Address' />
                    </Col>
                </Row>

                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a message here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Form>

        </Container >

    )
}
export default ContactForm;