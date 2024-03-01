import React from "react";
import fotterLogo from "../assets/images/footer-logog.png";
import Phone from "../assets/images/phone.png";
import linked from "../assets/images/linked-in.png";
import locate from "../assets/images/locae.png";
import PrimaryInput from "./PrimaryInput";
import GradientButton from "./GradientButton";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-text">
              <img src={fotterLogo} />
              <div className="text-icon">
                <img src={Phone} />
                <p className="">305-981-6475</p>
              </div>
              <div className="text-icon">
                <img src={locate} />
                <p className="">66 W. Flagler St. 9th Floor Miami, FL 33130</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="quick-links">
              <h5>Navigate</h5>
              <div className="links">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a href="#">Customer Stories</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="news-letter">
              <h5>Newsletter</h5>
              <PrimaryInput type='text' placeholder='Enter Your Email'/>
              <GradientButton text='Submit'/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="news-letter">
              <h5>Connect With Us</h5>
              <div className="footer-social">
                <img src={linked}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom mt-3">
        <p className="text-white fs-4">© CopyRight AceITtechnologies.com</p>
      </div>
    </footer>
  );
}

export default Footer;
