import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  const { t } = useTranslation();

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const highlights = t('aboutMe.highlights', { returnObjects: true });
  const highlightsArray = Array.isArray(highlights) ? highlights : [];


  const renderHighlight = () => {
    return highlightsArray.map((value, i) => (
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
        <ScreenHeading title={t('aboutMe.title')} subHeading={""} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {t('aboutMe.description')}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{t('aboutMe.highlightsHeading')}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}