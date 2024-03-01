import React from "react";
import domainIcon1 from "../assets/images/domain-icon-1.png";
import domainIcon2 from "../assets/images/buisness-message.png";
import domainIcon3 from "../assets/images/deveops-b.png";
import domainIcon4 from "../assets/images/data-b.png";
import domainIcon5 from "../assets/images/managment-b.png";
import domainIcon6 from "../assets/images/cloud-b.png";
import domainIcon7 from "../assets/images/Micro-b.png";
import domainIcon8 from "../assets/images/extreme-b.png";
import One from "../assets/images/1.png";
import Two from "../assets/images/2.png";
import Three from "../assets/images/3.png";
import Four from "../assets/images/4.png";
import Five from "../assets/images/5.png";
import Six from "../assets/images/6.png";
import Seven from "../assets/images/7.png";
import Eight from "../assets/images/8.png";
import DomainLogo from "../assets/images/domain-logo.png";
import UserIcon from "../assets/images/user-icon.png";
function Domain() {
  return (
    <>
      <section className="domain-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="domain-content-wrp position-relative"
                data-aos="fade-left"
              >
                <div className="wrp">
                  <h4>
                    <span className="b-span-one">Our</span> 8 Domains
                  </h4>
                  <small className="text-white">
                    At Ace8, we empower businesses to thrive in the digital age
                    through cutting-edge technology services spanning eight
                    crucial domains. From Advanced Architectures to <br />{" "}
                    Microservices, Code & Development, we're dedicated to
                    delivering unparalleled expertise and innovative solutions
                    tailored to meet your specific needs.
                  </small>
                </div>
                <div className="row wrp align-items-center justify-content-center mt-5">
                  <div className="col-md-3">
                    <div className="domain-text">
                      <div className="domain-icons d-flex">
                        <img src={domainIcon1} alt="" />
                        <img src={One} alt="" />
                      </div>
                      <div className="domain-icon-text mt-3 py-2">
                        <p>
                          Advanced <br /> Architectures{" "}
                          <span className="b-span-one">(AceEA)</span>
                        </p>
                        <small className="text-white">
                          Our team of experts excels in designing and
                          implementing advanced technology enterprise
                          architectures, ensuring your systems are not just up
                          to date, but ahead of the curve.
                        </small>
                      </div>
                    </div>
                    <div className="domain-text mt-5">
                      <div className="domain-icons d-flex">
                        <img src={domainIcon8} alt="" />
                        <img src={Five} alt="" />
                      </div>
                      <div className="domain-icon-text mt-3 py-2">
                        <p>
                          Extreme Automation <br />{" "}
                          <span className="b-span-one">(AceAutomate)</span>
                        </p>
                        <small className="text-white">
                          Efficiency is key. Ace8 excels in Extreme Automation,
                          optimizing your workflows and processes, allowing your
                          business to operate at maximum productivity.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="main-center d-flex justify-content-between">
                      <div className="domain-text mb-4">
                        <div className="domain-icons d-flex">
                          <img src={domainIcon2} alt="" />
                          <img src={Two} alt="" />
                        </div>
                        <div className="domain-icon-text mt-3 py-2">
                          <p>
                            Messaging Queuing <br />{" "}
                            <span className="b-span-one">(AceMQ)</span>
                          </p>
                          <small className="text-white">
                            Seamless communication is the backbone of any
                            successful enterprise. Ace8 specializes in crafting
                            robust messaging queuing solutions to optimize your
                            data flow and enhance collaboration.
                          </small>
                        </div>
                      </div>
                      <div className="domain-text mb-4">
                        <div className="domain-icons d-flex">
                          <img src={domainIcon3} alt="" />
                          <img src={Three} alt="" />
                        </div>
                        <div className="domain-icon-text mt-3 py-2">
                          <p>
                            DevSecOps &nbsp;
                            <span className="b-span-one"> (AceDSO)</span>
                          </p>
                          <small className="text-white">
                            Security is at the core of everything we do. With
                            our DevSecOps practices, we seamlessly integrate
                            security into the development process, providing you
                            with a robust and secure foundation.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="logo-domain text-center p-5">
                      <img src={DomainLogo} alt="" />
                    </div>
                    <div className="main-center d-flex justify-content-between">
                      <div className="domain-text mt-4">
                        <div className="domain-icons d-flex">
                          <img src={domainIcon4} alt="" />
                          <img src={Six} alt="" />
                        </div>
                        <div className="domain-icon-text mt-3 py-2">
                          <p>
                            Data Management and Solutions{" "}
                            <span className="b-span-one">(AceData)</span>
                          </p>
                          <small className="text-white">
                            Unlock the full potential of your data with Ace8's
                            comprehensive Data Management and Solutions. From
                            storage to analytics, we ensure your data is a
                            valuable asset, not a challenge.
                          </small>
                        </div>
                      </div>
                      <div className="domain-text mt-4">
                        <div className="domain-icons d-flex">
                          <img src={domainIcon5} alt="" />
                          <img src={Seven} alt="" />
                        </div>
                        <div className="domain-icon-text mt-3 py-2">
                          <p>
                            Support and Incident Management{" "}
                            <span className="b-span-one">(AceFortify)</span>
                          </p>
                          <small className="text-white">
                            Our dedicated support and incident management
                            services guarantee that your systems remain
                            operational, minimizing downtime and ensuring a
                            seamless experience for your users.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="domain-text">
                      <div className="domain-icons d-flex">
                        <img src={domainIcon6} alt="" />
                        <img src={Four} alt="" />
                      </div>
                      <div className="domain-icon-text mt-3 py-2">
                        <p>
                          Cloud-Native &nbsp;
                          <span className="b-span-one">(AceCloud)</span>
                        </p>
                        <small className="text-white">
                          Our team of experts excels in designing and
                          implementing advanced technology enterprise
                          architectures, ensuring your systems are not just up
                          to date, but ahead of the curve.
                        </small>
                      </div>
                    </div>
                    <div className="domain-text mt-5">
                      <div className="domain-icons d-flex">
                        <img src={domainIcon7} alt="" />
                        <img src={Eight} alt="" />
                      </div>
                      <div className="domain-icon-text mt-3 py-2">
                        <p>
                          Microservices/Code/ <br /> Development &nbsp;
                          <span className="b-span-one">(AceMS)</span>
                        </p>
                        <small className="text-white">
                          Agility with our Microservices/Code/Development
                          expertise. Ace8 empowers you to build and scale
                          applications with ease, fostering innovation and rapid
                          development cycles.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-lg-8 col-12 my-5">
                    <button className="domain-btn">
                      <img src={UserIcon} alt="" />
                      <p>
                        Top-Tier Talent (Conntal) <br />{" "}
                        <span>
                          Conntal supports all of our divisions of Ace8 and
                          provides our eternal teams and clients with best of
                          breed talent.
                        </span>
                      </p>{" "}
                    </button>
                  </div>
                </div>
                <div className="row wrp mt-5">
                  <div className="col-12">
                    <div className="domain-bottom">
                      <p>
                        Ace8 is not just a technology services company; we are
                        your strategic partner in navigating the ever-evolving
                        landscape of technology. Elevate your business to new
                        heights with Ace8 - Where innovation meets excellence!
                        Ace8 is not just a technology services company; we are
                        your strategic partner in navigating the ever-evolving
                        landscape of technology. Elevate your business to new
                        heights with Ace8 - Where innovation meets excellence!
                      </p>
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

export default Domain;
