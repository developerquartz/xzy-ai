import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// css
import "./VideoAds.scss";

// img
import logoBody from "../../../../../Assets/Images/logo-body.png";

const VideoAds = () => {
  return (
    <>
      <section className="VideoAds py-5" style={{ background: "#F7F7FA" }}>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg="11" className="my-2">
              <div className="cardCstm position-relative py-5 px-3 text-center">
                <div className="inner mx-auto">
                  <div className="logoIcn position-absolute my-2">
                    <img src={logoBody} alt="" className="img-fluid" />
                  </div>
                  <div className="content py-2 pt-4">
                    <h2 className="m-0 fw-sbold text-white py-2">
                      Start Creating Winning Video Ads Today!
                    </h2>
                    <p className="m-0 py-2 text-white">
                      Don't miss out on the opportunity to captivate your
                      audience and boost your business. Start creating winning
                      video ads now and pave the way to unprecedented growth and
                      profits!
                    </p>
                    <div className="py-2 my-2 position-relative text-center d-flex justify-content-center btnWrpper position-absolute">
                      <Button className="d-flex align-items-center justify-content-center rounded-pill commonBtn bg-white border-white theme-clr">
                        Try ABC.AI Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VideoAds;
