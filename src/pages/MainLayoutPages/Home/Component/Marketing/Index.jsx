import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Marketing.scss";
import logoIcn from "../../../../../Assets/Images/logo-body.png";
import logoIcnBody from "../../../../../Assets/Images/webclip.png";

/**
 * Description:- This component includes details about new updates.
 * @returns {any}
 */

const Marketing = () => {
  return (
    <>
      <section className="marketing poistion-relative py-5">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="sectionHeader mb-2 text-center">
                <div className="py-2 logoIcn">
                  <img src={logoIcn} alt="" className="img-fluid" />
                </div>
                <h2 className="m-0 fw-bold text-dark py-2">
                  <span className="theme-clr1"> New Updates </span>
                  For the Marketing Genius in You
                </h2>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr"> ABC Copy</h6>
                      <span className="labelWrp rounded-pill px-2 text-white">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <ul className="list-unstyled ps-0 mb-0 commonList">
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">18 ABC Scripts</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">20 ABC Leads</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">
                        4 AOV Boosting Money Closes
                      </p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">4 20 Min Long Form ABCs</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr"> Funnel Copy</h6>
                      <span className="labelWrp rounded-pill px-2 text-white">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <ul className="list-unstyled ps-0 mb-0 commonList">
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">18 ABC Scripts</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">20 ABC Leads</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">
                        4 AOV Boosting Money Closes
                      </p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">4 20 Min Long Form ABCs</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr"> Funnel Copy</h6>
                      <span className="labelWrp rounded-pill px-2 text-white">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <ul className="list-unstyled ps-0 mb-0 commonList">
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">18 ABC Scripts</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">20 ABC Leads</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">
                        4 AOV Boosting Money Closes
                      </p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">4 20 Min Long Form ABCs</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr">
                        {" "}
                        Social Media Copy
                      </h6>
                      <span className="labelWrp rounded-pill px-2 text-white">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <ul className="list-unstyled ps-0 mb-0 commonList">
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">18 ABC Scripts</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">20 ABC Leads</p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">
                        4 AOV Boosting Money Closes
                      </p>
                    </li>
                    <li className="d-flex align-items-start py-2">
                      <span className="icn me-2 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M14.734 2.32066C13.8098 3.18004 12.9706 4.08405 12.2295 4.99254C11.0107 3.31932 9.49735 1.61754 7.79199 0.0327148C3.40583 4.10057 0.291992 9.40772 0.291992 12.6041C0.291992 18.2872 4.76521 22.8899 10.292 22.8899C15.8188 22.8899 20.292 18.2872 20.292 12.6041C20.292 10.2291 17.9706 5.32289 14.734 2.32066ZM13.8679 17.5283C12.8991 18.2024 11.7116 18.6041 10.4215 18.6041C7.20137 18.6041 4.57771 16.4733 4.57771 13.0149C4.57771 11.2903 5.65985 9.772 7.82503 7.17557C8.13753 7.53271 12.2393 12.7738 12.2393 12.7738L14.8567 9.78807C15.0409 10.0894 15.2079 10.3916 15.3585 10.6765C16.5822 13.0059 16.0688 15.9881 13.8679 17.5283Z"
                            fill="#E9423A"
                          />
                        </svg>
                      </span>
                      <p className="m-0 fw-sbold">4 20 Min Long Form ABCs</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="my-2">
              <div className="sectionHeader mb-2 text-center">
                <p className="m-0 py-2 fw-sbold">COMING SOON</p>
                <h2 className="m-0 fw-bold text-dark py-2">
                  <span className="theme-clr1"> A-List Bots </span>
                  For Every Piece Of The Puzzle
                </h2>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr">Legal</h6>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <p className="m-0 text-dark">
                    We can’t have you launching non-complaint ABCs now can we?
                    Save yourself $1000/hour and paste in your script to have it
                    efficiently reviewed for compliance. We’ll give you a
                    score/10 on the risk scale and let you know the exact next
                    steps to make sure you’re legally safeguarded. Now of course
                    we can’t legally say we’ll replace your lawyer, you still
                    need to run everything by them if it’s risky.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr">Videographers</h6>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <p className="m-0 text-dark">
                    Paste in your script & immediately get a shot list for your
                    videographer. With an inclusive b-roll shot list and
                    explicit editing directions, filming becomes
                    straightforward, even for novices. All you need to do is
                    send all these details over to one of our partner production
                    companies and you’re good to go.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-3">
              <div className="cardCstm h-100  p-3 bg-white">
                <div className="top d-flex align-items-center gap-10 mb-3">
                  <img src={logoIcnBody} alt="" className="img-fluid" />
                  <div className="content">
                    <div className="d-flex align-items-start top gap-10">
                      <h6 className="m-0 fw-bold theme-clr">Legal</h6>
                    </div>
                  </div>
                </div>
                <div className="py-2 cardBody">
                  <p className="m-0 text-dark">
                    Shift your target audience effortlessly with ABC.ai. Target
                    different pockets of market sophistication and even
                    completely different markets. Every product has multiple
                    different target avatars to advertise to and we’ll help you
                    find undiscovered, but highly profitable markets to sell
                    your products to.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Marketing;
