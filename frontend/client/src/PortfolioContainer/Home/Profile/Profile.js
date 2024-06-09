import React from 'react'
import {  useTypewriter } from 'react-simple-typewriter'
//import { userTypewriter, Cursor, useTypewriter } from 'react-simple-typewriter'

import "./Profile.css";



export default function Profile() {
    const [typeEffect] = useTypewriter(
        {
            words: ['Data Engineering / Developing',
                'Python / Javascript / VBA / DAX ',
                'MySQL / MongoDB / HiveQL',
                'pySpark / DataFlow',
                'Apache NIFI / Apache AirFlow',
                'Google Cloud Platform / HortonWorks'
            ],
            loop: true,
            typeSpeed: 100,
            deleteSpeed: 50,
            delaySpeed: 1000
        }
    )


    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/jorge.garciaotero.3/">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/jgo1986/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jorgegarciaotero">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/jorgegarciaotero">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I am <span className="highlighted-text">Jorge García Otero</span>
                        </span>
                    </div>


                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <span>{typeEffect}</span>
                            </h1>
                            <span className="profile-role-tagline">
                                Telecommunications Engineer. Automating your data processes from
                                ingestion to visualization.
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <a className="nav-link text-truncate" href="resume_jorgegarciaotero.pdf" download="resume_jorgegarciaotero.pdf" >
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>

                </div>


                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}