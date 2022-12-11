import React, { useState } from 'react';
import MyCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import GithubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import AestheteThumbnail from '../assets/Aesthete.png';
import QtThumbnail from '../assets/QualityTime.png';
import WeatherThumbnail from '../assets/Weather-dashboard.png';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import OnlyCooksThumbnail from '../assets/Only-cooks.png'
// import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

function ProjectDisplay() {

    const [value, setValue] = useState([1, 3]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);

    return (
        <Container className='projects'>
            <Row>
                <Col> <MyCard /> </Col>
                <Col xs={12} md={8}>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={OnlyCooksThumbnail} />
                                <Card.Body>
                                    <Card.Title> Only Cooks </Card.Title>
                                    <Card.Text>
                                        HTML, CSS, JavaScript, React, Node, GraphQL, Apollo,
                                    </Card.Text>

                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton id="tbg-btn-1" value={1}>
                                            <GithubIcon />
                                        </ToggleButton>
                                        <ToggleButton id="tbg-btn-2" value={2}>
                                            <LanguageIcon />
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={AestheteThumbnail} />
                                <Card.Body>
                                    <Card.Title> Aesthete </Card.Title>
                                    <Card.Text>
                                        HTML, CSS, JavaScript, Bulma, Bootstrap, Express, Handlebars, mySQL, Sequelize
                                    </Card.Text>

                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton id="tbg-btn-1" value={1}>
                                            <GithubIcon />
                                        </ToggleButton>
                                        <ToggleButton id="tbg-btn-2" value={2}>
                                            <LanguageIcon />
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={QtThumbnail} />
                                <Card.Body>
                                    <Card.Title> Quality Time </Card.Title>
                                    <Card.Text>
                                        HTML, CSS, JavaScript, Bulma, MealDB, CocktailDB
                                    </Card.Text>

                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton id="tbg-btn-1" value={1}>
                                            <GithubIcon />
                                        </ToggleButton>
                                        <ToggleButton id="tbg-btn-2" value={2}>
                                            <LanguageIcon />
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={WeatherThumbnail} />
                                <Card.Body>
                                    <Card.Title> Weather Dashboard </Card.Title>
                                    <Card.Text>
                                        HTML, CSS, JavaScript, jQuery, Bootstrap
                                    </Card.Text>

                                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                        <ToggleButton id="tbg-btn-1" value={1}>
                                            <GithubIcon />
                                        </ToggleButton>
                                        <ToggleButton id="tbg-btn-2" value={2}>
                                            <LanguageIcon />
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>




                </Col>
            </Row>
        </Container>
    )

}

export default ProjectDisplay;