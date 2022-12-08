import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from '../components/Card';
import '../styles/Home.css';

function Home() {
    return (
        <Container className='home'>
            <Row>
                <Col xs={6} md={4}> <MyCard /> </Col>
                <Col xs={12} md={8}> What should go here? </Col>
            </Row>
        </Container>

    );
}

export default Home;