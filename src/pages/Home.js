import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from '../components/Card';
import '../styles/Home.css';
import VideoBG from '../assets/ocean-bg.mp4';
// import OceanGif from '../assets/ocean.gif';

function Home() {
    return (

        <div className='home'>
            <div className='overlay'></div>
            <video src={VideoBG} autoPlay loop muted />
            <Container className='content'>
                <Row>
                    <Col xs={6} md={4}> <MyCard /> </Col>
                </Row>
            </Container>
        </div>

        // <Container className='home'>
        //     <Row className='main'>
        //         <video src={VideoBG} autoPlay loop muted />
        //         {/* <Col xs={6} md={4}> <MyCard /> </Col> */}
        //         {/* <Col xs={12} md={8} className='main'>

        //         </Col> */}
        //     </Row>
        // </Container>

    );
}

export default Home;