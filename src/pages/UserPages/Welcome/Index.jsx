import React from "react";

// img
import aiSystem from "../../../Assets/Images/ai-system.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section className="section dashboard">
        <div className="row m-0">
          <div
            className="col-sm-12 text-center card"
            style={{ minHeight: "80vh" }}
          >
            <div className="card-body">
              <div className="row h-100">
                <div className="my-auto">
                  <h5 className="text-primary fw-regular">Welcome to ABC.AI</h5>
                  <img
                    src={aiSystem}
                    style={{ maxWidth: 400 }}
                    className="w-100"
                    data-aos="fade-in"
                  />
                  <h3 data-aos="fade-in" data-aos-delay={400}>
                    <b>
                      Instantly Create World Class Marketing <br />
                      To Sell Any Product or Service Online
                    </b>
                  </h3>
                  <br />
                  <Link
                    data-aos="fade-in"
                    data-aos-delay={900}
                    to="/product/add"
                    className="btn btn-primary hvr-float"
                  >
                    Add New Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
