import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@mui/icons-material/Send';
import '../styles/Contact.css';

function ContactModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <EmailIcon />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-header"> Get Connected! </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 form-headers" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 form-headers" controlId="exampleForm.ControlInput1">
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Your Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3 form-headers"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label> Leave a note: </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        <SendIcon />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactModal;