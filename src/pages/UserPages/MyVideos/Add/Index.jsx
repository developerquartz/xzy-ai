import React from "react";

// img
import bodyLogo from "../../../../Assets/Images/logo-body.png";
import { Link } from "react-router-dom";

const NewVideo = () => {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold text-center">
                  <img src={bodyLogo} className="me-3" style={{ width: 25 }} />
                  New Video
                  <i className="bi bi-play-btn" />
                </h5>
                <form className="row g-3">
                  <div className="col-12 text-center">
                    <a
                      href="#"
                      className="btn border-primary text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#myscript"
                    >
                      Select Your Script
                    </a>
                    <p>
                      Or <br /> Paste your video script here
                    </p>
                    <textarea
                      className="form-control"
                      id="scriptInput"
                      style={{ height: 300 }}
                      placeholder=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center">
                    <Link to="/video-editor" className="btn btn-primary">
                      Create
                    </Link>{" "}
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewVideo;
