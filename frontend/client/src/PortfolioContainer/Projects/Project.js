import React from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import shape from "../../assets/Projects/shape-bg.png";
import ImageCarousel from "../../utilities/ImageCarousel/ImageCarousel";

// Project Images
import foto1 from "../../assets/Projects/fotodered1.jpg";
import foto2 from "../../assets/Projects/fotodered2.jpg";

import vision1 from "../../assets/Projects/vision1.jpg";
import vision2 from "../../assets/Projects/vision2.jpg";
import vision3 from "../../assets/Projects/vision3.jpg";
import vision4 from "../../assets/Projects/vision4.jpg";
import vision5 from "../../assets/Projects/vision5.jpg";

import pb1 from "../../assets/Projects/powerbi1.jpg";
import pb2 from "../../assets/Projects/powerbi2.jpg";
import pb3 from "../../assets/Projects/powerbi3.jpg";
import pb4 from "../../assets/Projects/powerbi4.jpg";

import bolsa1 from "../../assets/Projects/bolsa1.png";
import bolsa2 from "../../assets/Projects/bolsa2.png";
import bolsa3 from "../../assets/Projects/bolsa3.png";


export default function Project(props) {
  const { t } = useTranslation();
  
  console.log("PROPS ID",props.id)
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    console.log("PROPS ID",props.id)
    Animations.animations.fadeInScreen(props.id);
  };


  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



  return (
    <div>
      <ScreenHeading
        title={t('projects.title')}
        subHeading={t('projects.subHeading')}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <h4 className="personal-projects-heading work-projects-heading">{t('projects.workTitle')}</h4>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-carousel">
                  <ImageCarousel images={[foto1, foto2]} />
                </div>
                <div className="project-info">
                  <h5>Fotodered</h5>
                  <h6>Flask / Javascript / SQL</h6>
                  <p>
                    {t('projects.fotodered.desc')}
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-carousel">
                  <ImageCarousel images={[vision1, vision2, vision3, vision4, vision5]} />
                </div>
                <div className="project-info">
                  <h5>Vision</h5>
                  <h6>Flask / Javascript / SQL</h6>
                  <p>
                    {t('projects.vision.desc')}
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-carousel">
                  <ImageCarousel images={[pb1, pb2, pb3, pb4]} />
                </div>
                <div className="project-info">
                  <h5>{t('projects.kpis.title')}</h5>
                  <h6>Microsoft Power BI / SQL / Python</h6>
                  <p>
                    {t('projects.kpis.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Projects Section */}
            <div className="personal-projects-section">
              <h4 className="personal-projects-heading">{t('projects.personalTitle')}</h4>
              <div className="personal-grid">
                <div className="project-card centered-card">
                  <div className="project-carousel">
                    <ImageCarousel images={[bolsa1, bolsa2, bolsa3]} />
                  </div>
                  <div className="project-info">
                    <h5>{t('projects.stock.title')}</h5>
                    <h6>Python / Pandas / Streamlit</h6>
                    <p>{t('projects.stock.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}