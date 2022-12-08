import React from 'react';
import MyCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Projects.css';

function ProjectDisplay() {
    return (
        <Container className='projects'>
            <Row>
                <Col> <MyCard /> </Col>
                <Col> Project cards </Col>
            </Row>
        </Container>
    )

}

export default ProjectDisplay;