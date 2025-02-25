import React from "react";

import uxthumb from "../../../Assets/Images/ux-build-thumb.png";
import { Link } from "react-router-dom";

const MyPages = () => {
  return (
    <>
      <section className="section">
        <div className="col-12" data-aos="fade-up">
          <div className="card" style={{ minHeight: "80vh" }}>
            <div className="card-body">
              <h4 className="fw-bold card-title">Landing Page</h4>
              <div className="row">
                <div className="col-12 col-lg-3 aos-init aos-animate">
                  <Link className="card border-primary  h-100" to="/new-page">
                    <div className="card-body text-center">
                      <div className="row h-100">
                        <div className="my-auto">
                          <i className="bi bi-window-sidebar fs-1" />
                          <p className="text-muted">Create New Landing Page</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className="col-12 col-lg-3 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="card  h-100">
                    <div
                      className="card-header text-white"
                      style={{
                        backgroundImage: `url(${uxthumb})`,
                        backgroundSize: "cover",
                        minHeight: 200,
                      }}
                    ></div>
                    <div
                      className="card-body p-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                    >
                      <h5 className="fw-bold ">Landing Page 1</h5>
                      <p style={{ fontSize: 14 }}>
                        Date Created:{" "}
                        <span className="text-muted">2023-08-30</span>
                        <br />
                        Last Edit:{" "}
                        <span className="text-muted">2023-08-30</span>
                      </p>
                      <div className="d-flex">
                        <Link
                          to="/web-builder"
                          className="btn btn-sm text-primary shadow-sm border-primary"
                        >
                          <i className="bi bi-pencil-square" /> Open
                        </Link>
                        <a
                          href="#"
                          className="btn btn-sm ms-auto border-danger text-danger"
                        >
                          <i className="bi bi-trash" />
                        </a>
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
};

export default MyPages;
