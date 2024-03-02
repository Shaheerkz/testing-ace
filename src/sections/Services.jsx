import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SettingImg from "../assets/images/setting-icon.png";
import InviormentImg from "../assets/images/invirment.png";
import IncidentImg from "../assets/images/incident.png";
import TabsMImg from "../assets/images/tabs-message.png";
import DesignImg from "../assets/images/design-tab.png";
import TDataImg from "../assets/images/t-data.png";
import AutoImg from "../assets/images/auto-tab.png";
import DevopsImg from "../assets/images/deveops-icon.png";
import TestingAuto from "../assets/images/testing-auto.png";
import TestingIcon from "../assets/images/testing-icon.png";
import MessageIcon from "../assets/images/message-icon.png";
import Devops2 from "../assets/images/devops-2.png";
import DevMachine from "../assets/images/dev-machine.png";
import Ser2 from "../assets/images/ser-2.png";
import Ser3 from "../assets/images/ser-3.png";
import Ser4 from "../assets/images/ser-4.svg";
import Ser5 from "../assets/images/ser-5.png";
import Ser6 from "../assets/images/ser-6.png";
import PortalImg from "../assets/images/portal.png";
import StoryImgOne from "../assets/images/story-1.png";
import Aws from "../assets/images/aws.png";
import Rabbit from "../assets/images/rabbit.png";
import Vmware from "../assets/images/vmware.png";
import GradientButton from "../components/GradientButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const [activeTab, setActiveTab] = useState(7);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="services-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="services-content-wrp position-relative">
                  <div className="row">
                    <div className="col-xxl-5 col-12" data-aos="fade-right">
                      <div className="">
                        <div className="wrp">
                          <div className="featured-content">
                            <Button
                              variant="outline-success"
                              className="rounded-pill"
                            >
                              Featured Services
                            </Button>
                            <h4>
                              What We Can <br /> Do{" "}
                              <span className="b-span-two">For You:</span>
                            </h4>
                            <small className="text-white mt-5">
                              We are a diverse Team of engineers with 100's of
                              years of 
                              <br />
                              experience in software development. We leverage
                              our
                              <br />
                              experience and proven methodologies to bring
                              extreme value <br />
                              to any dev shop.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xxl-7 col-12 mb-5 wrp"
                      data-aos="fade-left"
                    >
                      <div className="featured-left">
                        <div className="featured-service">
                          <div className="top-service">
                            <img src={SettingImg} alt="" />
                            <h3>Featured Services</h3>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(1)}
                          >
                            <img src={DevopsImg} alt="" />
                            <p>DevSecOps</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(2)}
                          >
                            <img src={InviormentImg} alt="" />
                            <p>Environment as a service</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(3)}
                          >
                            <img src={IncidentImg} alt="" />
                            <p>Incident Management</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(4)}
                          >
                            <img src={TabsMImg} alt="" />
                            <p>Message Brokers</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(5)}
                          >
                            <img src={DesignImg} alt="" />
                            <p>Microservices Design</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(6)}
                          >
                            <img src={TDataImg} alt="" />
                            <p>Data Analytics Integration</p>
                          </div>
                          <div
                            className={`top-service ${
                              activeTab === 0 ? "active-tab" : ""
                            }`}
                            onClick={() => handleTabClick(7)}
                          >
                            <img src={AutoImg} alt="" />
                            <p>Automated Testing</p>
                          </div>
                        </div>
                        <div className="testing-auto">
                          {activeTab === 1 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>DevSecOps</h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 2 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Environment <br /> as a service
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 3 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Incident <br /> Management
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 4 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Message <br /> Brokers
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 5 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Microservices <br /> Design
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 6 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Data Analytics <br /> Integration
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                          {activeTab === 7 && (
                            <>
                              <img src={TestingIcon} alt="" />
                              <h4>
                                Automated <br /> Testing
                              </h4>
                              <img src={TestingAuto} alt="" />
                            </>
                          )}
                          {/* Add sections for other tabs here */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 wrp">
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={MessageIcon} className="my-2" alt="" />
                        <h5>Message Brokers</h5>
                        <small className="text-white">
                          Your trusted partner for seamless integration of
                          message brokers. With troubleshooting expertise,
                          consulting and assessment services, and comprehensive
                          support, we optimize performance and ensure smooth
                          operations for your technology stack.
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={Ser2} className="my-2" alt="" />
                        <h5>Data Analytics Integration </h5>
                        <small className="text-white">
                          Differentiating through our unique integration
                          approach. Seamlessly integrate e-commerce data with
                          Databricks/Snowflake. Design consulting, cost
                          optimization, and fault tolerance ensure efficient,
                          uninterrupted access to critical data.
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={Ser3} className="my-2" alt="" />
                        <h5>Automated Testing</h5>
                        <small className="text-white">
                          Experience the efficiency of automated testing for
                          your e-commerce application. Our unique approach
                          includes AI-enhanced test code, seamless CI/CD
                          integration, and crowd-sourced test case development
                          to save time and resources. 
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={Ser4} className="my-2" alt="" />
                        <h5>Onboarding as a Service</h5>
                        <small className="text-white">
                          Accelerate software delivery with our streamlined
                          CI/CD solution, including automated onboarding and
                          customizable off-boarding for efficient development
                          cycles. Spin up entire environments in hours not days.
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={Ser5} className="my-2" alt="" />
                        <h5>Incident Management</h5>
                        <small className="text-white">
                          Top-notch full-stack incident management services that
                          prioritize preparation, documentation, and proactive
                          measures to minimize downtime and avoid loss of
                          revenue.
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                      <div className="services-card" data-aos="fade-down">
                        <img src={Ser6} className="my-2" alt="" />
                        <h5>Microservices Design, Development & Refactoring</h5>
                        <small className="text-white">
                          AceMQ offers comprehensive microservices design,
                          development, and refactoring services that strictly
                          adhere to industry best practices, including loose
                          coupling and the 12Factor approach.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 wrp ">
                    <div className="wrp-devops-side d-flex">
                      <div className="col-md-6" data-aos="fade-right">
                        <div className="devops-content">
                          <img src={Devops2} alt="" />
                          <h5>DevSecOps</h5>
                          <small className="text-white">
                            Bridging the gap between development, security, and
                            operations. Achieve efficient <br /> and secure
                            software delivery through collaboration, automation,
                            and a<br />
                            security-first approach.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6" data-aos="fade-left">
                        <img src={DevMachine} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 wrp">
                    <div className="col-12">
                      <div
                        className="text-story text-center"
                        data-aos="fade-down"
                      >
                        <h4>
                          <span className="b-span-one">Among</span>{" "}
                          <span className="b-span-two">The</span> Best
                        </h4>
                        <small className="text-white">
                          Ace8 has helped the World's premiere companies reach
                          exceptional outcomes
                        </small>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6">
                          <div className="story-card" data-aos="fade-right">
                            <h5>Microservices Migration</h5>
                            <div className="card-center my-4 position-relative">
                              <p className="text-white card-top">
                                Customer Story
                              </p>
                              <div className="pad-center"></div>
                              {/* <img src={StoryImgOne} alt="" /> */}
                              <div className="card-bottom">
                                <small className="text-white">
                                  Accelerated Migration of Custom Microservices
                                  to AWS Lambda
                                </small>
                                <button className="story-read-btn text-white my-2">
                                  Read Story{" "}
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="story-card" data-aos="fade-right">
                            <h5>Critical Web Launch</h5>
                            <div className="card-center-2 my-4 position-relative">
                              <p className="text-white card-top">
                                Customer Story
                              </p>
                              <div className="pad-center"></div>
                              {/* <img src={StoryImgOne} alt="" /> */}
                              <div className="card-bottom">
                                <small className="text-white">
                                  Migrating from C++ to Java for a Time-Critical
                                  Web Launch
                                </small>
                                <button className="story-read-btn text-white my-2">
                                  Read Story{" "}
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 wrp">
                    <div className="cloud-ser-main">
                      <div className="col-md-6">
                        <div className="cloud-services">
                          <h4>
                            Strategically Aligned With{" "}
                            <span className="b-span-three">
                              Industry Leaders
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <img src={Aws} alt="" />
                      </div>
                      <div className="col-md-2">
                        <img src={Vmware} alt="" />
                      </div>
                      <div className="col-md-2">
                        <img src={Rabbit} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 wrp">
                    <div className="col-12">
                      <div className="bd-managment">
                        <div className="managment-right mx-auto position-relative">
                          <img src={PortalImg} className="img-fluid" alt="" />
                        </div>
                        <div className="managment-left">
                          <div className="featured-content">
                            <GradientButton
                              className="rounded-pill"
                              text="Incident Management"
                            />
                            <h4>
                              How to{" "}
                              <span className="b-span-two">Proactively</span>{" "}
                              Minimize{" "}
                              <span className="b-span-three">Incidents</span>
                            </h4>
                            <small className="text-white mt-5">
                              We are a diverse Team of engineers with 100's of
                              years of  experience in software development.{" "}
                              <br /> We leverage our experience and proven
                              methodologies to bring extreme value <br />
                              to any dev shop.
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
        </div>
      </section>
    </>
  );
}

export default Services;
