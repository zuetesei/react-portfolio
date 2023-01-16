import React from 'react';
import {
    FaGithub,
    FaChrome
} from 'react-icons/fa';
import './style.css';
import Carousel from 'react-elastic-carousel';
import { portfoliodata } from '../../content_options';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

const ProjectCarousel = () => {
    return (
        <>
            <section>
                <div className="row">
                    <Carousel breakPoints={breakPoints}>
                        {portfoliodata.map((data, i) => {
                            return (
                                <div className="project">
                                    <div className="project-thumbnail">
                                        <a href='#'><img src={data.img} alt='' /></a>
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
            </section>
        </>
    )
}

export default ProjectCarousel;

