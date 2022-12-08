import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GithubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


function ProjectCard() {
    // const { name, description, technologies, deployedUrl, githubRepo } = currentProject;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                    technologies
                </Card.Text>
                <Button variant="primary"> <GithubIcon /> </Button>
                <Button variant="primary"> <LanguageIcon /> </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;