import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Telecommunications Engineer with Master's degrees in Big Data and Artificial Intelligence. Over 10 years of experience in the data and telecommunications sectors. I began my career in network operations and deployment, evolving towards contract management, KPI control, and report automation. In recent years, I have consolidated my role as a Data Engineer, building data ingestion and transformation pipelines (Medallion architecture) for analytical exploitation in Power BI and web platforms.",
    highlights: {
      bullets: [
        "Data Engineering: Databricks, PySpark, Delta Lake, Apache NiFi, Airflow",
        "Cloud & Orchestration: Azure (Data Factory, DevOps), Google Cloud Platform",
        "Programming: Python (Flask, Pandas), SQL, JavaScript",
        "Databases: MariaDB, Hive, Oracle, Microsoft Dataverse",
        "Visualization: Power BI, Apache Superset",
        "Automation: Power Automate, Web Scraping (Selenium)"
      ],
      heading: "Key highlights:",
    },
  };


  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };


  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={""} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}