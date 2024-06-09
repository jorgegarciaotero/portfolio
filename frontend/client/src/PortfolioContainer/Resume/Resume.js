import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

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

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Current Role", logoSrc: "projects.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Certificates", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 45 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "MySQL", ratingPercentage: 89 },
    { skill: "MongoDB", ratingPercentage: 70 },
    { skill: "HiveQL", ratingPercentage: 80 },
    { skill: "Apache Nifi", ratingPercentage: 70 },
    { skill: "Apache Airflow", ratingPercentage: 60 },
    { skill: "Power BI", ratingPercentage: 80 },
    { skill: "Google Cloud Platform", ratingPercentage: 60 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Launchpad AI (DataScience)"}
        subHeading={"12 week Machine Learning Training course (320h)."}
        fromDate={"2020"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"Escuela de Organización Industrial (EOI)"}
        subHeading={"Master Degree in Big Data and Bussiness Intelligence"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"University of Vigo (UVIGO)"}
        subHeading={"Telecommunications Engineering. Specialization in Electronics"}
        fromDate={"2004"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="current-role">
      <div className="experience-container">
        <ResumeHeading
          heading={"Vodafone"}
          subHeading={"Data Engineering and Development"}
          fromDate={"2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> <b> Automated data ingestion and transformation</b> from diverse sources including statistics, alarms, network inventory files, SharePoint files, and ticketing system data (Amdocs) to facilitate analysis and visualization.
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> <b> Enhanced Amdocs Ticket Management:</b> Developed code to automate ticket creation, update, and closure based on network alarms and scheduled work notification emails. This reduces manual intervention and improves efficiency.
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> <b> Developed interactive dashboards</b> using Microsoft Power BI formonitor KPIs for various VNO Spain contracts.
          </span>
          <br />
          <span className="resume-description-text">
            <span>&#8226;</span> Fully developed the web portals  https://fotodered.vodafone.es/ and  https://vision.vodafone.es/
          </span>
          <br />
          <br />
          <span className="resume-description-text">
             <i>Tech Stack: HDFS, MySQL, Python(Flask), Javascript, HMTL, CSS, Bash, Apache NIFI, Superset, Stackstorm, Alerta, Microsoft PowerApps, GIT/Github. </i>
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">

        <ResumeHeading
          heading={"Vodafone"}
          subHeading={"Specialist in Suppliers and Partners Management"}
          fromDate={"2015"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <span>&#8226;</span> Partners and Suppliers Contract Management: Managed contractual agreements with Orange (Mobile and Fixed Sharing Services) and Cellnex (Mobile Infrastructure Cession).
            <br />
            <span>&#8226;</span> SLA/KPI Automation: Automated Service Level Agreements (SLAs) and Key Performance Indicators (KPIs) using Visual Basic for Applications (VBA).
            <br />
            <span>&#8226;</span> Interactive KPI/SLA Dashboards: Developed interactive dashboards for KPIs and SLAs using  MySQL and Microsoft Power BI.
          </span>
        </div>

        <br />
        <ResumeHeading
          heading={"Satec"}
          subHeading={"Network Technician"}
          fromDate={"2013"}
          toDate={"2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
             Managed the installation of equipment, wiring, and electrical connections in Vodafone Network Switching Centers .
             Analyzed and resolved incidents within the Vodafone Mobile Network.
            <br />
          </span>
        </div>

        <br />
        <ResumeHeading
          heading={"Gradiant"}
          subHeading={"C# Developer (Trainee)"}
          fromDate={"2012"}
          toDate={"2013"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Developed a telemedicine application using C++/C# to assist elderly people in performing physical exercises using Microsoft's Kinect Sensor device. The application performed joint detection and real-time recognition of pre-recorded movement patterns.
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
        Take a look at my certified courses at:&nbsp;
          <a href="https://www.linkedin.com/in/jorgegarciaotero/details/certifications/">the following link</a>. 
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
        description="Expired certificate"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 500;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
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
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
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
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
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