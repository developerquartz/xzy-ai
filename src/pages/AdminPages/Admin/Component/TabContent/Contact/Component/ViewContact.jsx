import React, { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getContactusDetails } from "../../../../../../../redux/contactus/thunk";
import { handleApiRequest } from "../../../../../../../services/handleApiRequest";

const ViewContactPop = ({ userAction, setUserAction }) => {
  const { contactDetails } = useSelector((state) => state.contactus);

  const handleAddEditPlan = () => {
    setUserAction(false);
  };

  const handleContactusDetails = async () => {
    const response = await handleApiRequest(getContactusDetails, userAction.id);
  };

  useEffect(() => {
    handleContactusDetails();
  }, [userAction]);

  // console.log("contactDetails", contactDetails);

  return (
    <>
      <Modal
        show={!!userAction}
        onHide={handleAddEditPlan}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg="12" className="my-2">
                <p>Name: {contactDetails.data?.name}</p>
              </Col>
              <Col lg="12" className="my-2">
                <p>Email: {contactDetails.data?.email}</p>
              </Col>
              <Col lg="12" className="my-2">
                <p>Status: {contactDetails.data?.status}</p>
              </Col>
              <Col lg="12" className="my-2">
                <p>Query: {contactDetails.data?.message}</p>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleAddEditPlan}
          >
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewContactPop;
