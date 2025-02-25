import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="siteFooter py-5 bg-white">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="d-flex align-items-start justify-content-between gap-10 flex-wrap">
                <div className="left">
                  <div className="flogo mb-3">
                    <Link to="">
                      <img src={Logo} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="py-2">
                    <h6 className="m-0 text-uppercase py-2 footHead fw-sbold">
                      Pages
                    </h6>
                    <ul className="list-unstyled ps-0 mb-0">
                      <li className="py-1">
                        <Link to="" className="link">
                          Home
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/pricing" className="link">
                          Pricing
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/reviews" className="link">
                          Reviews
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/login" className="link">
                          Login
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/request_features" className="link">
                          Request New Feature
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="affiliate" className="link">
                          Become An Affilate
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/contact" className="link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <h6 className="text-muted m-0 py-2 text-uppercase">
                    Sign Up To Our Newsletter
                  </h6>
                  <Form>
                    <div className="d-flex align-items-center gap-10">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                      <Button className="d-flex align-items-center justify-content-center commonBtn rounded-pill">
                        Subscribe Newsletter
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="copyright border-top py-3 d-flex align-items-center justify-content-between gap-10 flex-wrap">
                <div className="left">
                  <p className="m-0">© ABC.AI. 2023</p>
                </div>
                <div className="right">
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10">
                    <li className="px-2">
                      <Link to="about_us" className="link">
                        About Us
                      </Link>
                    </li>
                    <li className="px-2">
                      <Link to="privacy_policies" className="link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="px-2">
                      <Link to="terms_of_use" className="link">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
