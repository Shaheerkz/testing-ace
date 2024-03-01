import React from "react";
import buisnessPng from "../assets/images/b-problem.png";
import GradientButton from "../components/GradientButton";
function Buisness() {
  return (
    <>
      <section className="buisness-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 " data-aos="fade-left">
              <div className="buisness-content-wrp position-relative">
                <div className="wrp">
                  <p>Who we are</p>
                  <h4>
                    We are a{" "}
                    <span className="b-span-one">
                      People-Focused Organization
                    </span>{" "}
                    that{" "}
                    <span className="b-span-two">Solves Business Problems</span>{" "}
                    <span className="b-span-three">Through Technology</span>.
                  </h4>
                  <small className="text-white">
                    We offer an opportunity to envision your solution as a
                    roadmap where we collaborate to create, reinvent and
                    continuously deploy services, capabilities, and solutions to
                    solve your business challenges.
                  </small>
                </div>
              </div>
              <div className="b-button wrp">
                <GradientButton text="More About Us" />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center" data-aos="fade-right">
              <img src={buisnessPng} className="b-image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Buisness;
