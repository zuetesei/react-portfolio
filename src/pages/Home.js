import React from 'react';
import { Image } from 'react-bootstrap';
import HeaderPhoto from '../assets/header-photo.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import MyCard from '../components/Card';
// import '../styles/Home.css';
// import VideoBG from '../assets/ocean-bg.mp4';
// // import OceanGif from '../assets/ocean.gif';

function Home() {
    return (
        <div className='d-flex'>
            <div className='d-flex text-container col-7 align-items-center'>
                <h1 className='intro-text'>
                    Hello, my name is <br></br>
                    Zuleika Tesei, a <br></br>
                    Web Designer and <br></br>
                    Software Engineer. <br></br>
                    Open to freelance work.
                </h1>
            </div>
            <hr className='line' />
            <div className='image-container col-5'>
                <Image src={HeaderPhoto}
                    alt="zue in israel"
                    className="header-photo"
                    fluid />
            </div>
        </div>
    );
}

export default Home;