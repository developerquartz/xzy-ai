import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  createBot,
  getBotDetails,
  updateBotDetails,
} from "../../../../../../../redux/admin/bots/thunk";
import isURL from "validator/lib/isURL";
import { errorMsg } from "../../../../../../../utils";
import { handleApiRequest } from "../../../../../../../services/handleApiRequest";

const AddEditBotPop = ({
  userAction,
  setUserAction,
  selectedBot,
  handleAllBots,
}) => {
  const { botDetails } = useSelector((state) => state.bots);
  const [newBotDetails, setNewBotDetails] = useState({});

  const handleAddEditBot = () => {
    setUserAction(false);
  };

  const handleChange = (e) => {
    setNewBotDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleBotDetails = async () => {
    const response = await handleApiRequest(getBotDetails, userAction.id);
  };

  const handleUpdateOrCreateBot = async () => {
    if (!newBotDetails.name?.trim() || !newBotDetails.url?.trim()) {
      return errorMsg("Please enter bot details");
    } else if (!isURL(newBotDetails.url)) {
      return errorMsg("Invalid Url");
    }

    let response = {};
    if (userAction.actionType === "add") {
      response = await handleApiRequest(createBot, newBotDetails);
      console.log("add script response", response);
    } else if (userAction.actionType === "edit") {
      response = await handleApiRequest(updateBotDetails, newBotDetails);
      console.log("update script response", response);
    }
    if (response.isSuccess) {
      await handleAllBots();
      setUserAction(null);
      setNewBotDetails({});
    }
  };

  useEffect(() => {
    if (userAction.actionType === "edit") {
      handleBotDetails();
    }
  }, [selectedBot]);

  useEffect(() => {
    if (userAction.actionType === "edit" && botDetails.data) {
      setNewBotDetails(botDetails.data);
    }
  }, [botDetails]);

  // console.log("botDetails", botDetails);
  // console.log("newBotDetails", newBotDetails);

  return (
    <>
      <Modal
        show={!!userAction}
        onHide={handleAddEditBot}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {userAction.actionType === "add" ? "Add Bot" : "Edit Bot"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateOrCreateBot}>
            <Row>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter bot name"
                  name="name"
                  value={newBotDetails?.name || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Url
                </label>
                <input
                  className="form-control"
                  placeholder="Enter URL"
                  name="url"
                  value={newBotDetails?.url || ""}
                  onChange={handleChange}
                ></input>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleAddEditBot}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateOrCreateBot}
            className="d-flex align-items-center justify-content-center commonBtn"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEditBotPop;
