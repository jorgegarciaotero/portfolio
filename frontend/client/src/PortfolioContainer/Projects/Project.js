import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import shape from "../../../src/assets/Projects/shape-bg.png";
import ImageCarousel from "../../utilities/ImageCarousel/ImageCarousel";

// Project Images
import foto1 from "../../../assets/Projects/fotodered1.jpg";
import foto2 from "../../../assets/Projects/fotodered2.jpg";

import vision1 from "../../../assets/Projects/vision1.jpg";
import vision2 from "../../../assets/Projects/vision2.jpg";
import vision3 from "../../../assets/Projects/vision3.jpg";
import vision4 from "../../../assets/Projects/vision4.jpg";
import vision5 from "../../../assets/Projects/vision5.jpg";

import pb1 from "../../../assets/Projects/powerbi1.jpg";
import pb2 from "../../../assets/Projects/powerbi2.jpg";
import pb3 from "../../../assets/Projects/powerbi3.jpg";
import pb4 from "../../../assets/Projects/powerbi4.jpg";


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
                <ImageCarousel images={[foto1, foto2]} />
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
                <ImageCarousel images={[vision1, vision2, vision3, vision4, vision5]} />
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
                <ImageCarousel images={[pb1, pb2, pb3, pb4]} />
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