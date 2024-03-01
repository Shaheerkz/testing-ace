import React from "react";
// import TechImg from "../assets/images/contact-after.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import LocationImg from "../assets/images/location-icon.png";
import CallImg from "../assets/images/phone-icon.png";
// import Button from "react-bootstrap/Button";
import GradientButton from "../components/GradientButton";
import Form from "react-bootstrap/Form";
function Contact() {
  return (
    <>
      <section className="contact-us-sec position-relative">
        {/* <div className="contact-image">
          <img src={TechImg} className="w-100" alt="" />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-heading position-relative">
                <h4>
                  Contact <span className="b-span-three"> Us</span>{" "}
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-top">
                <div className="locations d-flex align-items-center ">
                  <div className="location-img">
                    <img src={LocationImg} alt="" />
                  </div>
                  <div className="location-detail text-white">
                    <p>Our Address</p>
                    <small>66 W. Flagler St. 9th Floor Miami, FL 33130</small>
                  </div>
                </div>
                <div className="locations d-flex align-items-center ">
                  <div className="location-img">
                    <img src={CallImg} alt="" />
                  </div>
                  <div className="location-detail text-white">
                    <p>Phone Number</p>
                    <small>305-981-6475</small>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="message-heading mb-5">
                  <h4>
                    Send <span className="b-span-three">Us</span>{" "}
                    <span className="b-span-two">Message</span>
                  </h4>
                  <small className="mt-5 text-white fs-6">
                    Have any questions regarding our services? Send us your
                    message.
                  </small>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your First Name...."
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Last Name...."
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email Address..."
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Contact Number..."
                    />
                  </Form.Group>
                </div>
                <div className="row my-4">
                <div className="col-md-12 ">
                  <FloatingLabel controlId="floatingTextarea2" label="Describe your problem in at least 250 characters...">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px", width: '104%' }}
                    />
                  </FloatingLabel>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <GradientButton text='Submit'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
