import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Intro from '../../assets/about.png';
import EmailIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstaIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Link } from 'react-router-dom';
import '../../styles/Card.css';

function MyCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Intro} />
            <Card.Body>
                <Card.Title> Zuleika Tesei </Card.Title>
                <Card.Text>
                    <h3 className="profession"> Software Engineer </h3>
                    <p className="resume"> Download my <a href="https://drive.google.com/file/d/10rVuyQYrQqitZYLImVzahrnJugGaYR9J/view?usp=sharing" target="_blank" rel="noreferrer"> resume </a>. </p>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> <Link to='/react-portfolio'> Home </Link> </ListGroup.Item>
                <ListGroup.Item> <Link to='/projects'> Projects </Link> </ListGroup.Item>
                <ListGroup.Item> <Link to='/about'> About </Link> </ListGroup.Item>
                <ListGroup.Item> <Link to='/contact'> Connect </Link> </ListGroup.Item>
            </ListGroup>
            <Card.Body>

                <Card.Link href="mailto: zuleikatesei@gmail.com"> <EmailIcon /> </Card.Link>
                <Card.Link href="https://github.com/zuetesei" target="_blank" rel="noreferrer"> <GithubIcon /> </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/zuleika-tesei/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </Card.Link>
                <Card.Link href="https://www.instagram.com/love.zue/" target="_blank" rel="noreferrer"> <InstaIcon /> </Card.Link>
                <Card.Link href="https://twitter.com/thenationalzue" target="_blank" rel="noreferrer"> <TwitterIcon /> </Card.Link>
                <Card.Link href="https://www.pinterest.com/internationalzue/" target="_blank" rel="noreferrer"> <PinterestIcon /> </Card.Link>

            </Card.Body>
        </Card>
    )
}

export default MyCard;