import React from 'react';
import MyCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectDisplay() {
    return (
        <Container>
            <Row>
                <Col> <MyCard /> </Col>
                <Col> Project cards </Col>
            </Row>
        </Container>
    )

}

export default ProjectDisplay;