import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Intro from '../../assets/about.png';
import EmailIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function MyCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Intro} />
            <Card.Body>
                <Card.Title> Zuleika Tesei </Card.Title>
                <Card.Text>

                    Full Stack Web Develepor with the ability and confidence to learn
                    & collaborate in fast-paced environments paired with an eagerness for
                    personal growth in the craft of engineering.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> Projects </ListGroup.Item>
                <ListGroup.Item> About </ListGroup.Item>
                <ListGroup.Item> Connect </ListGroup.Item>
            </ListGroup>
            <Card.Body>

                <Card.Link href="mailto: zuleikatesei@gmail.com"> <EmailIcon /> </Card.Link>
                <Card.Link href="https://github.com/zuetesei" target="_blank" rel="noreferrer"> <GithubIcon /> </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/zuleika-tesei/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </Card.Link>

            </Card.Body>
        </Card>
    )
}

export default MyCard;