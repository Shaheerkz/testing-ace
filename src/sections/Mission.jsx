import React from "react";
import GradientButton from "../components/GradientButton";
import EarthImg from '../assets/images/earth.png'

function Mission() {
  return (
    <>
      <section className="our-mission-sec">
        <div className="container">
          <div className="row">
            <div className="mission-text-wrp position-relative d-flex justify-content-between">
              <div className="col-md-6 col-12" data-aos="fade-right">
                <div className="mission-text">
                  <h4 className="my-4">
                    <span className="b-span-one">Our</span>Mission
                  </h4>
                  <small className="text-white">
                    Our company’s mission first and foremost is to ‘EMPOWER
                    PEOPLE’. We look to disrupt the industry. <br/> Not only with our
                    technical prowess, but the way we interface with our clients
                    ,build relationship, and deliver results. We build
                    people-focused organizations  and that shows forth in all of <br/>
                    all interactions.{" "}
                  </small>
                  <div className="mt-5 wrp">
                    <GradientButton text="Learn more" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12" data-aos="fade-left">
                    <img src={EarthImg} className="earth-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
