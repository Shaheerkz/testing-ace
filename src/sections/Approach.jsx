import React from "react";
import appIcon1 from "../assets/images/app-card-icon.png";
import appIcon2 from "../assets/images/boldly.png";
import appIcon3 from "../assets/images/delivery.png";
function Approach() {
  return (
    <>
      <section className="approach-sec">
        <div className="container">
          <div className="row">
            <div className="approach-wrp position-relative">
              <div className="col-12">
                <div className="approach-content">
                  <div className="approach-text" data-aos="fade-down">
                    <h4 className="mb-3">
                      <span className="b-span-two">Our</span>
                      <span className="b-span-three">Approach</span>
                    </h4>
                    <small className="text-white my-5">
                      Our company’s mission first and foremost is to ‘EMPOWER
                      PEOPLE’. We look to disrupt the industry. Not only with
                      our technical prowess, <br /> but the way we interface
                      with our clients ,build relationship, and deliver results.
                      We build people-focused organizations and that shows forth
                      in all of all interactions.{" "}
                    </small>
                  </div>
                  <div className="row mt-5 mt-50">
                    <div className="col-md-4" data-aos="fade-right">
                      <div className="app-card">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img
                            src={appIcon1}
                            className="card-icon mb-3"
                            alt=""
                          />
                          <p>
                            {" "}
                            <span className="b-span-three">Listen</span>
                            <span className="b-span-three"> Intently</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe listening is more <br /> than just
                            hearing what's being said. <br /> It is the intent
                            and need beyond words <br /> and understanding the
                            desire
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-down">
                      <div className="app-card-2">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img
                            src={appIcon2}
                            className="card-icon mb-3"
                            alt=""
                          />
                          <p>
                            {" "}
                            <span className="b-span-one change-opac">Think </span>
                            <span className="b-span-one"> Boldly</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe in our people and encourage <br /> them
                            to boldly attack challenges, drive <br /> outcomes,
                            and push innovation, so that
                            <br /> every engagement exceeds expectations.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-left">
                      <div className="app-card-3">
                        <div className="app-card-child text-center justify-content-center d-flex flex-column align-items-center">
                          <img
                            src={appIcon3}
                            className="card-icon mb-3"
                            alt=""
                          />
                          <p>
                            {" "}
                            <span className="b-span-three change-opac">Deliver </span>
                            <span className="b-span-three"> Excellently</span>
                          </p>
                          <small className="text-white text-center my-3">
                            We believe in being excellent in <br /> all we do, from how
                            we speak, to how <br /> we deliver. If we cannot deliver
                            excellently <br /> then we are not delivering at all.
                          </small>
                        </div>
                      </div>
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

export default Approach;
