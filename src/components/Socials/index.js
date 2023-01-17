import React from 'react';
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaPinterest,
    FaInstagram,
} from 'react-icons/fa'
import { socialdata } from '../../content_options';
import './style.css';

export const Socialicons = (params) => {
    return (
        <div className='stick-follow-icon'>
            <ul>
                {socialdata.github && (
                    <li>
                        <a href={socialdata.github} target='_blank' rel='noreferrer'>
                            <FaGithub />
                        </a>
                    </li>
                )}
                {socialdata.linkedin && (
                    <li>
                        <a href={socialdata.linkedin} target='_blank' rel='noreferrer'>
                            <FaLinkedin />
                        </a>
                    </li>
                )}
                {socialdata.twitter && (
                    <li>
                        <a href={socialdata.twitter} target='_blank' rel='noreferrer'>
                            <FaTwitter />
                        </a>
                    </li>
                )}
                {socialdata.pinterest && (
                    <li>
                        <a href={socialdata.pinterest} target='_blank' rel='noreferrer'>
                            <FaPinterest />
                        </a>
                    </li>
                )}
                {socialdata.instagram && (
                    <li>
                        <a href={socialdata.instagram} target='_blank' rel='noreferrer'>
                            <FaInstagram />
                        </a>
                    </li>
                )}
            </ul>
            <p> Follow Me </p>
        </div>
    );
};