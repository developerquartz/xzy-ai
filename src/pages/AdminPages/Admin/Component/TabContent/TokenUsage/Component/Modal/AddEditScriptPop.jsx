import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const AddEditScriptPop = ({ addEditScript, setAddEditScript }) => {
  const handleAddEditScript = () => {
    setAddEditScript(!addEditScript);
  };
  return (
    <>
      <Modal
        show={addEditScript}
        onHide={handleAddEditScript}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add Scripts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script Name
                </label>
                <input type="text" className="form-control" />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script Title
                </label>
                <input type="text" className="form-control" />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script decription
                </label>
                <input type="email" className="form-control" />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Cost
                </label>
                <input type="number" className="form-control" />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script formula
                </label>
                <textarea
                  name=""
                  id=""
                  rows="4"
                  className="form-control"
                ></textarea>
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script framework
                </label>
                <textarea
                  name=""
                  id=""
                  rows="4"
                  className="form-control"
                ></textarea>
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Script Section
                </label>
                <Form.Select
                  className="form-control"
                  aria-label="Default select example"
                >
                  <option>Choose Section</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Link
                </label>
                <input type="text" className="form-control" />
              </Col>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Displaying a link
                </label>
                <input type="text" className="form-control" />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleAddEditScript}
          >
            Close
          </Button>
          <Button className="d-flex align-items-center justify-content-center commonBtn">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEditScriptPop;
