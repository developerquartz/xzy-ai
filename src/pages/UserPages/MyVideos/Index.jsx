import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import VideoPopup from "./component/Modal/VideoPop/VideoPop";

const MyVideos = () => {
  const [videoPop, setVideoPop] = useState();
  const handleVideoPop = () => {
    setVideoPop(!videoPop);
  };
  return (
    <>
      <VideoPopup videoPop={videoPop} setVideoPop={setVideoPop} />
      <section className="section">
        <div className="col-12" data-aos="fade-up">
          <div className="card" style={{ minHeight: "80vh" }}>
            <div className="card-body">
              <h4 className="fw-bold card-title">My Videos</h4>
              <div className="row">
                <div className="col-12 col-lg-3 aos-init aos-animate">
                  <Link
                    className="card border-primary  h-100"
                    to="/my-videos/new"
                  >
                    <div className="card-body text-center">
                      <div className="row h-100">
                        <div className="my-auto">
                          <i className="text-muted bi bi-plus fs-1" />
                          <p className="text-muted">Add New Video</p>
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
                        backgroundImage:
                          "url(https://i3.ytimg.com/vi/PDbPtq-Qb9Y/hqdefault.jpg)",
                        backgroundSize: "cover",
                        minHeight: 200,
                      }}
                    >
                      <h5 className="fw-bold ">
                        <i
                          className="bi bi-video-camera"
                          style={{
                            fontSize: 75,
                            position: "absolute",
                            right: 10,
                            top: 0,
                            opacity: "0.3",
                          }}
                        />
                        Video Draft 1
                      </h5>
                    </div>
                    <div
                      className="card-body p-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                    >
                      <p style={{ fontSize: 14 }}>
                        Date Created:{" "}
                        <span className="text-muted">2023-08-30</span>
                        <br />
                        Last Edit:{" "}
                        <span className="text-muted">2023-08-30</span>
                      </p>
                      <div className="d-flex">
                        <Link
                          to="/video-editor"
                          className="btn btn-sm text-primary shadow-sm border-primary"
                        >
                          <i className="bi bi-pencil-square" /> Open
                        </Link>
                        <Button
                          variant="transparent"
                          onClick={handleVideoPop}
                          className=" btn-sm border-primary text-primary shadow-sm"
                        >
                          <i className="bi bi-play" /> Watch
                        </Button>
                        <a
                          href=""
                          className="btn btn-sm text-primary shadow-sm border-primary"
                        >
                          <i className="bi bi-download" /> Export
                        </a>
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

export default MyVideos;
