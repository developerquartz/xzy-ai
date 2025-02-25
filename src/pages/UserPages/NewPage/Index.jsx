import React from "react";

// img
import logoBody from "../../../Assets/Images/logo-body.png";
import { Link } from "react-router-dom";

const NewPage = () => {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold text-center">
                  <img src={logoBody} className="me-3" style={{ width: 25 }} />
                  AI Web Builder
                  <i className="bi bi-window-sidebar" />
                </h5>
                <p>
                  <b>Insert the URL to create your new page:</b>
                </p>
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="inputNanme4" className="form-label">
                      Page Name
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputNanme4" className="form-label">
                      URL
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="text-center">
                    <Link to="/web-builder" className="btn btn-primary">
                      Generate Webpage
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

export default NewPage;
