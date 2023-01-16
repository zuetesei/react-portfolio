import React from 'react';


function Footer() {
    return (
        <div className='footer d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-center'>
                <div className='sitemap'>
                    <h3> <u> Sitemap </u> </h3>
                    <ul>
                        <li><a href="/"> Home </a></li>
                        <li> <a href="/"> About </a></li>
                        <li> <a href="/"> Projects </a> </li>
                        <li> <a href="/"> Contact </a> </li>
                        <li> <a href="/"> View Resume </a>  </li>
                    </ul>
                </div>
                <div className='social-media-links'>
                    <h3> <u> Social Media Links </u> </h3>
                    <ul>
                        <li><a href='#'> GitHub </a></li>
                        <li><a href='#'> LinkedIn </a></li>
                        <li><a href='#'> Twitter </a></li>
                        <li><a href='#'> Instagram </a></li>
                        <li><a href='#'> Pinterest </a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright-text text-center'> &copy; 2023 LOVEZUE.COM </p>
        </div>

    );
}

export default Footer;