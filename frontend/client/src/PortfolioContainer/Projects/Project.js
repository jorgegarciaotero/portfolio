import React from "react";
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



  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Latest Projects"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <div className="projects-grid">
              <div className="project-item">
                <div className="client-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_Sitio_Web.png" alt="fotodered"></img>
                  <h5>Fotodered</h5>
                  <p>Flask / Javascript / SQL</p>
                </div>
                <div className="project-comment">
                  <p>
                    https://fotodered.vodafone.es/ <br />
                    Website developed using Flask, Datatables, Leaflet and ChartJs
                    to track Mobile and Fixed Network Alarms of Vodafone Spain Network Area.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="client-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_Sitio_Web.png" alt="vision"></img>
                  <h5>Vision</h5>
                  <p>Flask / Javascript / SQL</p>
                </div>
                <div className="project-comment">
                  <p>
                    https://vision.vodafone.es/ <br />
                    Website developed using Flask, Datatables, Leaflet and ChartJs
                    to track all Network Incidents of Vodafone Spain Network Area.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="client-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="powerbi"></img>
                  <h5>Network Operation KPIs</h5>
                  <p>Microsoft Power BI / SQL / Python</p>
                </div>
                <div className="project-comment">
                  <p>
                    Administration of the Network Operation Sharepoint, which contains over a score of Fully automated Power BI Executive dashboards that tracks Vodafone NetOps main KPIs.
                  </p>
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