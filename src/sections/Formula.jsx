import React from "react";
import Discovery from "../assets/images/discovery.png";
import Review from "../assets/images/review.png";
import Allignment from "../assets/images/Allignment.png";
import Continous from "../assets/images/continous.png";
import Two from "../assets/images/2-new.png";
import Four from "../assets/images/4-new.png";
import Three from "../assets/images/3-new.png";
import One from "../assets/images/1-new.png";
function Formula() {
  return (
    <>
      <section className="formula-sec">
        <div className="container">
          <div className="row">
            <div className="wrapper-formula d-flex position-relative">
              <div className="col-xl-6 col-12">
                <div className="formula-content">
                  <h4>
                    {" "}
                    Our <span className="b-span-one">Formula</span>
                  </h4>
                  <p>
                    With years of expertise we have distilled what works and
                    what <br /> doesn't. Scalable solutions that not only
                    account for new <br /> technologies, but most importantly
                    leverage your existing <br /> systems, timelines, and
                    budget.
                  </p>
                </div>
                <div className="main-wrp-f-first">
                  <div className="cards-wrp-f my-5">
                    <div className="cards-right">
                      <div className="cards-border"></div>
                      <div className="card-top-f">
                        <img src={Discovery} alt="" />
                        <h4>Discovery</h4>
                      </div>
                      <small>
                        {" "}
                        &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Our first step is to understand who you are as a company
                        and what makes your business tick. We review your goals,
                        process models, team and governance structures to ensure
                        our solutions fit your business.
                      </small>
                    </div>
                    <div className="numbers">
                      <img src={Two} alt="" />
                    </div>
                  </div>
                  <div className="cards-wrp-f my-5">
                    <div className="cards-right">
                      <div className="cards-border"></div>
                      <div className="card-top-f">
                        <img src={Review} alt="" />
                        <h4>Review & HandOff</h4>
                      </div>
                      <small>
                        {" "}
                        &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        We are passionate about enabling our clients and their
                        users. We always strive to leave our clients empowered
                        in the processes and solutions we implement. We ensure
                        users are educated and well versed in all the
                        capabilities
                      </small>
                    </div>
                    <div className="numbers">
                      <img src={Four} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12">
              <div className="main-wrp-f">
                
                  <div className="cards-wrp-f my-5">
                  <div className="numbers">
                      <img src={One} alt="" />
                    </div>
                    <div className="cards-right">
                      <div className="cards-border"></div>
                      <div className="card-top-f">
                        <img src={Allignment} alt="" />
                        <h4>Allignment</h4>
                      </div>
                      <small>
                        {" "}
                        &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        We align with your technical team and business stakeholders to create a game plan that considers all stakeholders' needs and establishes clear expectations for delivery.
                      </small>
                    </div>
                    
                  </div>
                  <div className="cards-wrp-f my-5">
                  <div className="numbers">
                      <img src={Three} alt="" />
                    </div>
                    <div className="cards-right">
                      <div className="cards-border"></div>
                      
                      <div className="card-top-f">
                        <img src={Continous} alt="" />
                        <h4>Continous Development</h4>
                      </div>
                      <small>
                        {" "}
                        &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        We believe in delivering value throughout the project. Our solutions are created so that stakeholders are receiving value throughout the delivery process and have an opportunity to progressively review and test along the way.
                      </small>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formula;
