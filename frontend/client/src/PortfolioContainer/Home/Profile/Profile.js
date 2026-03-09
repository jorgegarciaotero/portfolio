import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import "./Profile.css";

export default function Profile() {
    const [typeEffect] = useTypewriter({
        words: [
            'Data Engineer',
            'Python / SQL / PySpark',
            'Azure / Databricks / Data Factory',
            'Power BI / Superset / Power Automate',
            'Delta Lake / Hive / MariaDB',
            'Ingestion, Transformation & AI'
        ],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 1500
    });

    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="mailto:jorgegarciaotero@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                            <a href="https://www.facebook.com/jorge.garciaotero.3/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/jgo1986/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jorgegarciaotero" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/jorgegarciaotero" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I am <span className="highlighted-text">Jorge García Otero</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <h1>
                            {typeEffect}
                            <span style={{color: 'var(--accent-primary)'}}>|</span>
                        </h1>
                        <span className="profile-role-tagline">
                            Telecommunications Engineer & Master in AI. Automating your data processes from ingestion to visualization.
                        </span>
                    </div>

                    <div className="profile-options">
                        <a href="mailto:jorgegarciaotero@gmail.com">
                            <button className="btn primary-btn">Contact Me</button>
                        </a>
                        <a href="resume_jorgegarciaotero.pdf" download="resume_jorgegarciaotero.pdf">
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