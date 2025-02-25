import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ImgWithText.scss";
import iwt1 from "../../../../../Assets/Images/iwt1.png";
import iwt2 from "../../../../../Assets/Images/iwt2.png";
import iwt3 from "../../../../../Assets/Images/iwt3.png";
import l1 from "../../../../../Assets/Images/l1.png";
import l2 from "../../../../../Assets/Images/l2.png";
import l3 from "../../../../../Assets/Images/l3.png";
import l4 from "../../../../../Assets/Images/l4.png";
import ss1 from "../../../../../Assets/Images/ss1.png";
import ss2 from "../../../../../Assets/Images/ss2.png";
import ss3 from "../../../../../Assets/Images/ss3.png";
import ms1 from "../../../../../Assets/Images/ms1.png";
import ms2 from "../../../../../Assets/Images/ms2.png";
import ms3 from "../../../../../Assets/Images/ms3.png";

const ImgWithText = () => {
  return (
    <>
      <section className="imgWithText">
        <div
          className="py-5 position-relative "
          style={{
            background:
              "linear-gradient(94deg, rgba(115, 48, 237, 0.10) 4.07%, rgba(249, 249, 251, 0.00) 100.54%)",
          }}
        >
          <Container>
            <Row className="justify-content-between">
              <Col lg="5" className="my-2">
                <div className="sectionHeader mb-2">
                  <p className="m-0 py-2 text-uppercase theme-clr fw-sbold">
                    REVOLUTIONIZE MARKETING STRATEGY
                  </p>
                  <h2 className="m-0 fw-bold text-dark py-2">
                    Create Video Ads Designed to Convert
                    <span className="theme-clr1"> Cold Traffic</span>
                  </h2>
                  <p className="py-2 m-0 text-mutd">
                    Our team of skilled creatives understands the art of
                    captivating storytelling and compelling visuals that grab
                    attention and drive action
                  </p>
                </div>
                <div className="py-2">
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ms1} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Increase ROAS by having specialized AI create for you
                      </p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ms2} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Make dozens of new & unique campaign ideas
                      </p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ms3} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">Decrease time to launch by 1000x</p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="5" className="my-2 imgWrpper">
                <img src={iwt3} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="py-5 position-relative "
          style={{
            background:
              "linear-gradient(94deg, rgba(115, 48, 237, 0.10) 4.07%, rgba(249, 249, 251, 0.00) 100.54%)",
          }}
        >
          <Container>
            <Row className="justify-content-between">
              <Col lg="5" className="my-2 imgWrpper">
                <img src={iwt2} alt="" className="img-fluid" />
              </Col>
              <Col lg="5" className="my-2">
                <div className="sectionHeader mb-2">
                  <p className="m-0 py-2 text-uppercase theme-clr fw-sbold">
                    UNLOCK THE SECRETS OF SUCCESS
                  </p>
                  <h2 className="m-0 fw-bold text-dark py-2">
                    Instantly Model Winning
                    <span className="theme-clr1">8 Figure</span> Instantly Model
                    Winning
                  </h2>
                  <p className="py-2 m-0 text-mutd">
                    Empower your business with data-driven insights and create
                    high-converting video sales letters that guarantee results
                  </p>
                </div>
                <div className="py-2">
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ss1} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Browse a Swipe File of the Biggest ABC Campaign
                      </p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ss2} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Train AI everything it needs to know to recreate them
                      </p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={ss3} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Get instant script & shotlist to act on now
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="py-5 position-relative "
          style={{
            background:
              "linear-gradient(94deg, rgba(115, 48, 237, 0.10) 4.07%, rgba(249, 249, 251, 0.00) 100.54%)",
          }}
        >
          <Container>
            <Row className="justify-content-between">
              <Col lg="5" className="my-2">
                <div className="sectionHeader mb-2">
                  <p className="m-0 py-2 text-uppercase theme-clr fw-sbold">
                    INDUSTRY LEADERS
                  </p>
                  <h2 className="m-0 fw-bold text-dark py-2">
                    Created by the{" "}
                    <span className="theme-clr1"> #1 ABC Advertiser</span> in
                    the World.
                  </h2>
                  <p className="py-2 m-0 text-mutd">
                    Team of top-notch professionals brings expertise,
                    innovation, and passion to every project, ensuring
                    exceptional results that exceed expectations
                  </p>
                </div>
                <div className="py-2">
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={l1} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">Founder Peter Kell</p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={l2} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Director of ABCs at{" "}
                        <Link to="" className="theme-clr">
                          Mindvalley.com
                        </Link>
                      </p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={l3} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">$0-$40,000,000 in 12 Months</p>
                    </li>
                    <li className="py-2 px-3 my-3 d-flex align-items-center gap-10 bg-white">
                      <span className="icn me-2">
                        <img src={l4} alt="" className="img-fluid" />
                      </span>
                      <p className="m-0">
                        Achieved Top #1, #2, #4 ABCs on YouTube
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="5" className="my-2 imgWrpper">
                <img src={iwt1} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ImgWithText;
