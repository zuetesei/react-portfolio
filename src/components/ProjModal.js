import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';

function Modal({ onClose, currentProject }) {
    const { name, photo, description, technologies, deployedUrl, githubRepo } = currentProject;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'> {name} </h3>
                <img src={require(`../../assets/large/${photo}/.jpg`)}
                    alt='current cateory' />
                <p> {description} </p>
                <p> <LanguageIcon />: {technologies} </p>
                <a href={deployedUrl}> <WebIcon /> </a>
                <a href={githubRepo}> <GithubIcon /> </a>
                <button onClick={onClose} type='button'> Close this modal </button>
            </div>
        </div>
    )
}

export default Modal;