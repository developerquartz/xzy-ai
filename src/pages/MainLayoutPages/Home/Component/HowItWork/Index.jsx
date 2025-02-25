import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./HowItWork.scss";
import tab1 from "../../../../../Assets/Images/tab1.png";

/**
 * Description:- This component tells about how abc AI works
 * @returns {any}
 */

const HowItWork = () => {
  return (
    <>
      <section className="HowItWork position-relative bg-white py-5">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="sectionHeader mb-2 text-center">
                <p className="m-0 py-2 fw-sbold theme-clr">HOW IT WORKS</p>
                <h2 className="m-0 fw-bold text-dark py-2">
                  World Class Marketing Done In Just a Few Clicks
                </h2>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="YourProduct"
              >
                <Nav variant="pills" className=" justify-content-center py-3">
                  <Nav.Item className="w-25">
                    <Nav.Link
                      eventKey="YourProduct"
                      className="w-100 d-flex align-items-center justify-content-center"
                    >
                      1. Describe Your Product
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-25">
                    <Nav.Link
                      eventKey="Avatar"
                      className="w-100 d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      2. Understand Your Buying Avatar
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-25">
                    <Nav.Link
                      eventKey="Formula"
                      className="w-100 d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      3. Choose Your Formula
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-25">
                    <Nav.Link
                      eventKey="Script"
                      className="w-100 d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      4. Generate Your ABC Script
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="YourProduct">
                    <Row className="justify-content-center pt-4">
                      <Col lg="10">
                        <div className="CardCstm GradientCard p-3 p-lg-4">
                          <p className="m-0 text-white">
                            Just insert the name of your product. Write a few
                            paragraphs about what it does, the more you tell it
                            the better it is. Next, copy paste some testimonials
                            of your product.
                          </p>
                        </div>
                        <div className="py-2">
                          <div className="imgWrp text-center"></div>
                          <img src={tab1} alt="" className="img-fluid" />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Avatar">
                    <Row className="justify-content-center pt-4">
                      <Col lg="10">
                        <div className="CardCstm GradientCard p-3 p-lg-4">
                          <p className="m-0 text-white">
                            Just insert the name of your product. Write a few
                            paragraphs about what it does, the more you tell it
                            the better it is. Next, copy paste some testimonials
                            of your product.
                          </p>
                        </div>
                        <div className="py-2">
                          <div className="imgWrp text-center"></div>
                          <img src={tab1} alt="" className="img-fluid" />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Formula">
                    <Row className="justify-content-center pt-4">
                      <Col lg="10">
                        <div className="CardCstm GradientCard p-3 p-lg-4">
                          <p className="m-0 text-white">
                            Just insert the name of your product. Write a few
                            paragraphs about what it does, the more you tell it
                            the better it is. Next, copy paste some testimonials
                            of your product.
                          </p>
                        </div>
                        <div className="py-2">
                          <div className="imgWrp text-center"></div>
                          <img src={tab1} alt="" className="img-fluid" />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Script">
                    <Row className="justify-content-center pt-4">
                      <Col lg="10">
                        <div className="CardCstm GradientCard p-3 p-lg-4">
                          <p className="m-0 text-white">
                            Just insert the name of your product. Write a few
                            paragraphs about what it does, the more you tell it
                            the better it is. Next, copy paste some testimonials
                            of your product.
                          </p>
                        </div>
                        <div className="py-2">
                          <div className="imgWrp text-center"></div>
                          <img src={tab1} alt="" className="img-fluid" />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowItWork;
