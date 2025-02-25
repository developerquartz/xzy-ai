import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import "./WhyChoose.scss";
import client from "../../../../../Assets/Images/client.png";

/**
 * Description:- This component shows some of the testimonials in a slider.
 * @returns {any}
 */

const WhyChooseUs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className="poistion-relative py-5 WhyChoose"
        style={{ background: "#F9F9FB" }}
      >
        <Container>
          <Row className="justify-content-between">
            <Col lg="5" className="my-2">
              <div className="sectionHeader mb-2">
                <p className="m-0 py-2 text-uppercase theme-clr fw-sbold">
                  WHY CHOOSE US
                </p>
                <h2 className="m-0 fw-bold text-dark py-2">
                  See Why People Like You Chose
                  <span className="theme-clr1"> ABC.AI</span>
                </h2>
                <p className="py-2 m-0 text-mutd">
                  Join the ranks of satisfied users and experience the
                  simplicity, effectiveness, and success that ABC.AI brings to
                  your marketing efforts!
                </p>
              </div>
            </Col>
            <Col lg="5" className="my-2  ">
              <Slider {...settings}>
                <div className="item p-3">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10">
                      <div className="imgWrp me-2">
                        <img
                          src={client}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="m-0 fw-sbold">Dan Greef</p>
                    </div>
                    <div className="content">
                      <p className="m-0 py-2">
                        "I'm so excited to learn this stuff and put it into
                        action because I'm going to change lives for the better.
                        We are at the new dawn in technology and communication
                        and we're so lucky to be here, in this place, right
                        now!!"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item p-3">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10">
                      <div className="imgWrp me-2">
                        <img
                          src={client}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="m-0 fw-sbold">Dan Greef</p>
                    </div>
                    <div className="content">
                      <p className="m-0 py-2">
                        "I'm so excited to learn this stuff and put it into
                        action because I'm going to change lives for the better.
                        We are at the new dawn in technology and communication
                        and we're so lucky to be here, in this place, right
                        now!!"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item p-3">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10">
                      <div className="imgWrp me-2">
                        <img
                          src={client}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="m-0 fw-sbold">Dan Greef</p>
                    </div>
                    <div className="content">
                      <p className="m-0 py-2">
                        "I'm so excited to learn this stuff and put it into
                        action because I'm going to change lives for the better.
                        We are at the new dawn in technology and communication
                        and we're so lucky to be here, in this place, right
                        now!!"
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyChooseUs;
