import React from "react";
import { Button, Modal } from "react-bootstrap";

// css
import "./Videopop.scss";

const VideoPopup = ({ videoPop, setVideoPop }) => {
  const handleVideoPop = () => {
    setVideoPop(!videoPop);
  };
  return (
    <>
      <Modal
        show={videoPop}
        onHide={handleVideoPop}
        backdrop="static"
        keyboard={false}
        centered
        className="videoPop"
      >
        <Modal.Header className="border-0 p-0" closeButton></Modal.Header>
        <Modal.Body className="p-0">
          <iframe
            className="w-100 h-100"
            src="https://www.youtube.com/embed/PDbPtq-Qb9Y?si=Gz9iuIrhrxt31-n0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen=""
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoPopup;
