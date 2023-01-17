import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
    FaGithub,
    FaChrome
} from 'react-icons/fa';
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-elastic-carousel';
import { meta, portfoliodata } from '../../content_options';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
]

export const ProjectCarousel = () => {
    return (
        <HelmetProvider>
            <Container className='project-sec'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> About | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> Portfolio </h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="row">
                    <Carousel breakPoints={breakPoints}>
                        {portfoliodata.map((data, i) => {
                            return (
                                <div className="project">
                                    <div className="project-thumbnail">
                                        <img src={data.img} alt={data.title} />
                                    </div>
                                    <div className="project-body">
                                        <div className="proj-title">
                                            <h5> {data.title} </h5>
                                        </div>
                                        <div className="tech-list">
                                            <span> {data.technologies_used} </span>
                                        </div>
                                    </div>
                                    <div className="proj-footer">
                                        <div className="btn">
                                            <a href={data.github_link} target="_blank" className="btn"> <FaGithub /> </a>
                                            <a href={data.deployed_link} target="_blank" className="btn"> <FaChrome /> </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </Container>
        </HelmetProvider >
    );
};

