import React from "react";

// img
import uxBuild from "../../../Assets/Images/ux-build.png";
import webclip from "../../../Assets/Images/webclip.png";

const WebBuilder = () => {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="quill-editor-full bg-white"
              id="transcribe"
              style={{ height: "80vh", overflowY: "scroll", width: "100%" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={uxBuild}
                  style={{ width: "100%", maxWidth: 800, margin: "auto" }}
                />
              </div>
            </div>
            <br />
            <div
              className="card position-sticky w-100"
              style={{ bottom: 10, border: "1px solid #ac38fa" }}
            >
              <div className="card-body p-2 p-md-2">
                <div className="row">
                  <div className="col-10">
                    <img
                      src={webclip}
                      className="rounded p-1"
                      style={{ width: 30, background: "#efefef" }}
                    />
                    <b className="text-primary">
                      Ask ABC.AI <i className="bi bi-stars text-primary" />
                    </b>
                    <input
                      className="form-control form-control-sm"
                      placeholder="/ Type something here"
                    />
                  </div>
                  <div className="col-2 d-flex">
                    <div
                      className="btn-group w-100 border-primary align-items-center"
                      role="group"
                    >
                      <button type="button" className="btn btn-outline">
                        <i className="bi bi-floppy" />
                      </button>
                      <button type="button" className="btn btn-outline">
                        <i className="bi bi-share" />
                      </button>
                      <button type="button" className="btn btn-outline">
                        <i className="bi bi-download" />
                      </button>
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

export default WebBuilder;
