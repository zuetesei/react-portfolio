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
                <Col> <MyCard /> </Col>
                <Col> What should go here? </Col>
            </Row>
        </Container>

    );
}

export default Home;