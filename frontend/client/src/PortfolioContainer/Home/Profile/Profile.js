import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTypewriter } from 'react-simple-typewriter';
import "./Profile.css";

export default function Profile() {
    const { t, i18n } = useTranslation();
    
    // We get the roles array directly from the translation dictionary
    // using returnObjects: true since it's an array of strings in i18n
    const roles = t('profile.roles', { returnObjects: true });

    const [typeEffect] = useTypewriter({
        words: Array.isArray(roles) ? roles : [],
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
                            {t('profile.hello')} <span className="highlighted-text">Jorge García Otero</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <h1>
                            {typeEffect}
                            <span style={{color: 'var(--accent-primary)'}}>|</span>
                        </h1>
                        <span className="profile-role-tagline">
                            {t('profile.tagline')}
                        </span>
                    </div>

                    <div className="profile-options">
                        <a href="mailto:jorgegarciaotero@gmail.com">
                            <button className="btn primary-btn">{t('profile.contactMe')}</button>
                        </a>
                        <a href={i18n.language === 'en' ? "resume_jorgegarciaotero.pdf" : "cv_jorgegarciaotero.pdf"}
                           download={i18n.language === 'en' ? "resume_jorgegarciaotero.pdf" : "cv_jorgegarciaotero.pdf"}>
                            <button className="btn highlighted-btn">{t('profile.getResume')}</button>
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