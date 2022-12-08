import React from 'react';
import MyCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

function ProjectDisplay() {
    return (
        <Container className='projects'>
            <Row>
                <Col> <MyCard /> </Col>
                <Col xs={12} md={8}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Col>
            </Row>
        </Container>
    )

}

export default ProjectDisplay;