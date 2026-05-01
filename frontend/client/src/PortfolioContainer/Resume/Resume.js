import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const { t } = useTranslation();
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const getTranslatedBulletLabel = (key) => t(`resume.tabs.${key}`);

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: getTranslatedBulletLabel('education'), logoSrc: "education.svg" },
    { label: getTranslatedBulletLabel('currentRole'), logoSrc: "projects.svg" },
    { label: getTranslatedBulletLabel('workHistory'), logoSrc: "work-history.svg" },
    { label: getTranslatedBulletLabel('skills'), logoSrc: "programming-skills.svg" },
    { label: getTranslatedBulletLabel('certificates'), logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Python (PySpark, Pandas, Flask)", ratingPercentage: 85 },
    { skill: "SQL & Databases (MySQL, Hive, Delta Lake)", ratingPercentage: 85 },
    { skill: "Azure (Databricks, Data Factory, DevOps)", ratingPercentage: 80 },
    { skill: "Power BI", ratingPercentage: 85 },
    { skill: "JavaScript, HTML, CSS", ratingPercentage: 75 },
    { skill: "Apache NiFi & Airflow", ratingPercentage: 55 },
    { skill: "Google Cloud Platform", ratingPercentage: 65 },
    { skill: "Power Automate & Selenium", ratingPercentage: 55 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Universidad Internacional de La Rioja (UNIR)"}
        subHeading={t('resume.education.unir')}
        fromDate={"2024"}
        toDate={"2025"}
      />
      <ResumeHeading
        heading={"Escuela de Organización Industrial (EOI)"}
        subHeading={t('resume.education.eoi')}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"University of Vigo (UVIGO)"}
        subHeading={t('resume.education.uvigo')}
        fromDate={"2004"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="current-role">
      <div className="experience-container">
        <ResumeHeading
          heading={"Reale Group"}
          subHeading={"Data Engineer"}
          fromDate={"Oct 2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.reale.b1')}} ></span>
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.reale.b2')}} ></span>
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.reale.b3')}} ></span>
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.reale.b4')}} ></span>
          </span>
        </div>
      </div>
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Vodafone"}
          subHeading={"Data Engineer"}
          fromDate={"2019"}
          toDate={"2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.voda1.b1')}} ></span>
            <br />
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.voda1.b2')}} ></span>
            <br />
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.voda1.b3')}} ></span>
          </span>
        </div>

        <ResumeHeading
          heading={"Vodafone"}
          subHeading={"Data Analyst"}
          fromDate={"2015"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.voda2.b1')}} ></span>
            <br />
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.voda2.b2')}} ></span>
          </span>
        </div>

        <ResumeHeading
          heading={"Experis / Satec"}
          subHeading={"Network Deployment & Operations Technician"}
          fromDate={"2013"}
          toDate={"2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> <span dangerouslySetInnerHTML={{__html: t('resume.experience.experis.b1')}} ></span>
          </span>
        </div>
      </div>
    </div>,





    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="certificates">
      <div className="experience-description">
        <span className="resume-description-text">
        {t('resume.certificates.text')}&nbsp;
          <a href="https://www.linkedin.com/in/jorgegarciaotero/details/certifications/">{t('resume.certificates.linkText')}</a>. 
        </span>
      </div>
      <ResumeHeading
        heading="Google Cloud Professional Data Engineer"
        description="Cred ID: 0x6524899423352807fc8c55da67c6762a9643d46b892543f3697be76f689a7559"
      />
      <ResumeHeading
        heading="Google Cloud Associate Cloud Engineer"
        description="Cred ID: 395ad4624818496897a6f6f0373c2b62"
      />
      <ResumeHeading
        heading="Cisco CCNA"
        description={t('resume.certificates.expired')}
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div className="resume-details-active-tab" key={selectedBulletIndex}>
        {resumeDetails[selectedBulletIndex]}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={t('resume.title')} subHeading={t('resume.subHeading')} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;