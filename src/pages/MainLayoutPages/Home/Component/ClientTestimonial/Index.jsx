import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// css
import "./ClientTestimonial.scss";

// img
import trustPilot from "../../../../../Assets/Images/trustPilot.png";
import review from "../../../../../Assets/Images/review.png";
import client from "../../../../../Assets/Images/client.png";

const ClientTestimonial = () => {
  return (
    <>
      <section className="testimonial py-5 position-relative bg-white ">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="8" className="my-2">
              <div className="sectionHeader mb-4 text-center">
                <h2 className="m-0 fw-bold text-dark">
                  What People are Saying About
                  <span className="theme-clr">ABC.AI</span>
                </h2>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-10">
                <img src={trustPilot} alt="" className="img-fluid" />
                <img src={review} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <Row className="mt-4">
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        <span className="m-0 text-white">C</span>
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        {/* <span className="m-0 text-white">C</span> */}
                        <img
                          src={client}
                          alt=""
                          className="img-fluid h-100 w-100"
                        />
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        {/* <span className="m-0 text-white">C</span> */}
                        <img
                          src={client}
                          alt=""
                          className="img-fluid h-100 w-100"
                        />
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        <span className="m-0 text-white">C</span>
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        {/* <span className="m-0 text-white">C</span> */}
                        <img
                          src={client}
                          alt=""
                          className="img-fluid h-100 w-100"
                        />
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="4" sm="6" className="my-2">
                  <div className="cardCstm bg-white p-3">
                    <div className="top d-flex align-items-center gap-10 pb-3">
                      <div
                        className="imgWrp d-flex align-items-center justify-content-center"
                        style={{ background: "#0288D1" }}
                      >
                        {/* <span className="m-0 text-white">C</span> */}
                        <img
                          src={client}
                          alt=""
                          className="img-fluid h-100 w-100"
                        />
                      </div>
                      <div className="content">
                        <p className="m-0 fw-bold">Chris Bing</p>
                      </div>
                    </div>
                    <div className="contentBody">
                      <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center rating py-2">
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                        <li className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                              fill="#AC38FA"
                            />
                          </svg>
                        </li>
                      </ul>
                      <p className="m-0 text-muted py-2">
                        At first I thought this was going to be some other
                        generic type output you might get with other so-called
                        abc creators and copywriting tools. But this one is
                        different. The quality you get out is insane. Its if you
                        had hired a "Pro" copywriter to write a script for you.
                        And not to mention, the information you get on your
                        avatar is gold. I Highly recommend it to anyone that
                        needs a ABC for their product or service.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientTestimonial;
