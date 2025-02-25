import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  createCreditPlan,
  getCreditPlanDetails,
  updateCreditPlanDetails,
} from "../../../../../../../redux/admin/creditPlans/thunk";
import { handleApiRequest } from "../../../../../../../services/handleApiRequest";

const AddEditCreditPlanPop = ({
  userAction,
  setUserAction,
  handleAllCreditPlans,
}) => {
  const defaultPlanValues = {
    currency: "USD",
    pricePerCredit: 0,
  };
  const { creditPlanDetails } = useSelector((state) => state.creditPlans);
  const [newCreditPlanDetails, setNewCreditPlanDetails] =
    useState(defaultPlanValues);

  const handleAddEditPlan = () => {
    setUserAction(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewCreditPlanDetails((prev) => {
      return {
        ...prev,
        [name]: value,
        pricePerCredit:
          name === "credit"
            ? (prev.price / value)?.toFixed(2)
            : name === "price"
            ? (value / prev.credit)?.toFixed(2)
            : prev.pricePerCredit,
      };
    });
  };

  const handleCreditPlanDetails = async () => {
    await handleApiRequest(getCreditPlanDetails, userAction.id);
  };

  const handleUpdateOrCreateCreditPlan = async () => {
    let response = {};
    if (userAction.actionType === "add") {
      response = await handleApiRequest(createCreditPlan, newCreditPlanDetails);
      console.log("add script response", response);
    } else if (userAction.actionType === "edit") {
      response = await handleApiRequest(
        updateCreditPlanDetails,
        newCreditPlanDetails
      );
      console.log("update script response", response);
    }
    if (response.isSuccess) {
      await handleAllCreditPlans();
      setNewCreditPlanDetails(defaultPlanValues);
      setUserAction(null);
    }
  };

  useEffect(() => {
    if (userAction.actionType === "edit") {
      handleCreditPlanDetails();
    }
  }, [userAction]);

  useEffect(() => {
    if (userAction.actionType === "edit" && creditPlanDetails.data) {
      setNewCreditPlanDetails(creditPlanDetails.data);
    }
  }, [creditPlanDetails]);

  // console.log("creditPlanDetails", creditPlanDetails);
  // console.log("newCreditPlanDetails", newCreditPlanDetails);

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
          <Modal.Title>
            {userAction.actionType === "add"
              ? "Add Credit Plan"
              : "Edit Credit Plan"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateOrCreateCreditPlan}>
            <Row>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Credit
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="credit"
                  value={newCreditPlanDetails?.credit || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col lg="12" className="my-2">
                <div className="py-2">
                  <label htmlFor="" className="fw-sbold m-0">
                    Select Currency
                  </label>
                  <Form.Select
                    className="form-control"
                    aria-label="Default select example"
                    style={{ backgroundColor: "#F5F5F5" }}
                    name="currency"
                    onChange={handleChange}
                  >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                  </Form.Select>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={newCreditPlanDetails?.price || ""}
                  onChange={handleChange}
                ></input>
              </Col>
              <p>
                Price per credit: {newCreditPlanDetails.pricePerCredit || ""}
              </p>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleAddEditPlan}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateOrCreateCreditPlan}
            className="d-flex align-items-center justify-content-center commonBtn"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEditCreditPlanPop;
