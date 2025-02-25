import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const ScriptReviewPop = ({ scriptReview, setScriptReview }) => {
  const handleScriptReview = () => {
    setScriptReview(!scriptReview);
  };
  return (
    <>
      <Modal
        show={scriptReview}
        onHide={handleScriptReview}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Script Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="m-0 fw-bold ">Uljasbusiness@gmail.com </p>
            <p className="m-0 fw-bold ">uljasbusiness@gmail.com</p>
            <ul className="list-unstyled ps-0 mb-0 fw-bold d-flex align-itmes-center justify-content-center py-2">
              <li className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#9A36F6"
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
                    d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#9A36F6"
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
                    d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#9A36F6"
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
                    d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#9A36F6"
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
                    d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#9A36F6"
                  />
                </svg>
              </li>
            </ul>
            <p className="m-0 py-2">
              Just very badly built and follows the template too directly
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleScriptReview}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ScriptReviewPop;
