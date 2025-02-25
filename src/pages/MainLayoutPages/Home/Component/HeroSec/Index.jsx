import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroSec.scss";
import heroBg from "../../../../../Assets/Images/heroBg.svg";
import heroGif from "../../../../../Assets/Images/hero.gif";
import TryABCAiButton from "../../../../../components/tyrABCButton";

/**
 * Description:- This is our hero section.
 * @returns {any}
 */

const HeroSec = () => {
  return (
    <>
      <section
        className="heroSec position-relative py-5"
        style={{
          backgroundColor: "#fdf9ff",
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "0 100%",
          backgroundAttachment: "scroll",
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col lg="6" className="my-2">
              <div className="sectionHeader py-2">
                <h2 className="m-0 fw-bold text-dark">
                  Instantly Create World Class Marketing To Sell Any Product or
                  Service Online
                </h2>
              </div>
              <ul className="list-unstyled ps-0 mb-0 commonList mt-1">
                <li className="d-flex align-itmes-start py-2">
                  <span className="icn d-flex align-items-center justify-content-center rounded-circle me-2 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <rect
                        x="1.5"
                        y="2.06396"
                        width="17.42"
                        height="17.42"
                        rx="8.71"
                        fill="white"
                        stroke="#AC38FA"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                  <p className="m-0">
                    {" "}
                    Train AI on your product, your story, your testimonials
                  </p>
                </li>
                <li className="d-flex align-itmes-start py-2">
                  <span className="icn d-flex align-items-center justify-content-center rounded-circle me-2 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <rect
                        x="1.5"
                        y="2.06396"
                        width="17.42"
                        height="17.42"
                        rx="8.71"
                        fill="white"
                        stroke="#AC38FA"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                  <p className="m-0">
                    {" "}
                    Use your new AI to rewrite proven 8-figure ABCs, Leads,
                    Hooks, Advertorials, Sales Pages, Landing Pages, Upsell
                    Pages, Text Sales Letters, Cold Emails, Linkedin DMs and
                    Much Much More! 
                  </p>
                </li>
                <li className="d-flex align-itmes-start py-2">
                  <span className="icn d-flex align-items-center justify-content-center rounded-circle me-2 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <rect
                        x="1.5"
                        y="2.06396"
                        width="17.42"
                        height="17.42"
                        rx="8.71"
                        fill="white"
                        stroke="#AC38FA"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                  <p className="m-0">
                    A game changer for Copywriters, E-com Owners, High Ticket,
                    Digital Course creators, Affiliates, Amazon Store Owners,
                  </p>
                </li>
              </ul>
              <div className="btnWrpper d-flex align-items-center gap-10 mt-4">
                <TryABCAiButton />
                <Button className="d-flex align-items-center justify-content-center rounded-pill commonBtn bg-white theme-clr">
                  Watch Product Tour
                </Button>
              </div>
            </Col>
            <Col lg="6" className="my-2 imgWrpper">
              <div className="inner">
                <div className="loader-wrapper d-flex align-items-center justify-content-center">
                  <div className="yellow"></div>
                  <div className="red"></div>
                  <div className="blue"></div>
                  <div className="violet"></div>
                </div>
                <img src={heroGif} alt="" className="img-fluid w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSec;
