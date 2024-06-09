import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Footer from "../../PortfolioContainer/Home/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {


  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
          </h2>{" "}
          <a href="https://www.facebook.com/jorge.garciaotero.3/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/jgo1986/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/jorgegarciaotero">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/jorgegarciaotero">
                <i className="fa fa-github"></i>
              </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}