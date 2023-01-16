import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactdata } from "../../content_options";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Contact = () => {
    const [formData, setFormdata] = useState({
        email: '',
        name: '',
        message: '',
        loading: false,
        alertmessage: '',
        variant: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactdata.YOUR_EMAIL,
            message: formData.message,
        };

        emailjs
            .send(
                contactdata.YOUR_SERVICE_ID,
                contactdata.YOUR_TEMPLATE_ID,
                contactdata.templateParams,
                contactdata.YOUR_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        loading: false,
                        alertmessage: 'SUCCESS! Thank you for your message.',
                        variant: 'success',
                        show: true,
                    });
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        alertmessage: `Failed to send! ${error.text}`,
                        variant: 'danger',
                        show: true,
                    });
                    document.getElementsByClassName('co_alert')[0].scrollIntoView();
                }
            );
    };

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Contact Me</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="12">
                        <Alert
                            //show={formData.show}
                            variant={formData.variant}
                            className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"
                                }`}
                            onClose={() => setFormdata({ show: false })}
                            dismissible
                        >
                            <p className="my-0">{formData.alertmessage}</p>
                        </Alert>
                    </Col>
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <p> Looking to collaborate on a project or just want to say hi? <br></br>
                            Fill out the form and I’ll do my best to reply within 24 hours! <br></br>
                            If contact forms are not your thing, email me directly!
                        </p>
                        <address>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${contactdata.your_email}`}>
                                {contactdata.your_email}
                            </a>
                            <br />
                            <br />
                            {contactdata.hasOwnProperty("your_phone") ? (
                                <p>
                                    <strong>Phone:</strong> {contactdata.your_phone}
                                </p>
                            ) : (
                                ""
                            )}
                        </address>
                        <p> Schedule a <a href='https://calendly.com/zuetesei/30min' target='_blank' rel="noreferrer">chat</a>!  </p>
                        <p> Currently based in: {contactdata.location}</p>
                    </Col>

                    {/* contact form start */}
                    <Col lg="7" className="d-flex align-items-center">
                        <form onSubmit={handleSubmit} className="contact__form w-100">
                            <Row>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name || ""}
                                        type="text"
                                        required
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={formData.email || ""}
                                        required
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <textarea
                                className="form-control rounded-0"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <br />
                            <Row>
                                <Col lg="12" className="form-group">
                                    <button className="btn ac_btn" type="submit">
                                        {formData.loading ? "Sending..." : "Send"}
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </HelmetProvider>
    );
};