import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import shape from "../../../src/assets/Projects/shape-bg.png";

export default function Project(props) {
  console.log("PROPS ID",props.id)
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    console.log("PROPS ID",props.id)
    Animations.animations.fadeInScreen(props.id);
  };


  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Latest Projects"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="client-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_Sitio_Web.png" alt="no internet connection"></img>
                    <h5>Fotodered</h5>
                    <p>Flask / Javascript / jQuery / SQL</p>
                  </div>
                  <div className="project-comment">
                    <p>
                      https://fotodered.vodafone.es/
                      Website developed using Flask, Datatables, Leaflet and ChartJs
                      to track Mobile and Fixed Network Alarms of Vodafone Spain Network Area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="client-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_Sitio_Web.png" alt="no internet connection"></img>
                    <h5>Vision</h5>
                    <p>Flask / Javascript / jQuery / SQL</p>
                  </div>
                  <div className="project-comment">
                    <p>
                      https://vision.vodafone.es/
                      Website developed using
                      Flask, Datatables, Leaflet and ChartJs
                      to track all Network Incidents of Vodafone Spain Network Area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="client-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="no internet connection"></img>
                    <h5>Network Operation KPIs</h5>
                    <p>Microsoft Power BI / SQL / Python</p>
                  </div>
                  <div className="testi-comment">
                    <p>
                      Administration of the Network Operation Sharepoint, which contains over a score of Fully automated Power BI Executive dashboards that tracks Vodafone NetOps main KPIs.
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}