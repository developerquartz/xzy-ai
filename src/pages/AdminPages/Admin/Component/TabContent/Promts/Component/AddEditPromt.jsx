import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createPrompts,
  getPromptDetails,
  updatePromoptDetails,
} from "../../../../../../../redux/admin/prompts/thunk";
import { handleApiRequest } from "../../../../../../../services/handleApiRequest";
import { errorMsg } from "../../../../../../../utils";

const AddEditPromptPop = ({
  userAction,
  setUserAction,
  selectedPrompt,
  handleAllPrompts,
}) => {
  const { promptDetails } = useSelector((state) => state.prompts);
  const [newPromptDetails, setNewPromptDetails] = useState({});

  const handleAddEditPrompt = () => {
    setUserAction(false);
  };

  const handleChange = (e) => {
    setNewPromptDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlePromptDetails = async () => {
    if (userAction === "editPrompt") {
      const response = await handleApiRequest(getPromptDetails, selectedPrompt);
      console.log("update details response", response);
    }
  };

  const handleCreateEditPrompts = async (e) => {
    e.preventDefault();
    if (!newPromptDetails.title?.trim() || !newPromptDetails.name?.trim()) {
      return errorMsg("Please Enter Prompt");
    }

    let response = {};
    if (userAction === "addPrompt") {
      response = await handleApiRequest(createPrompts, newPromptDetails);
      console.log("add prompt response", response);
    } else if (userAction === "editPrompt") {
      response = await handleApiRequest(updatePromoptDetails, newPromptDetails);
      console.log("update prompt response", response);
    }

    if (response.isSuccess) {
      await handleAllPrompts();
      handleAddEditPrompt();
    }
  };

  useEffect(() => {
    handlePromptDetails();
  }, [selectedPrompt]);

  useEffect(() => {
    if (userAction === "editPrompt" && promptDetails.data) {
      setNewPromptDetails(promptDetails.data);
    }
  }, [promptDetails]);

  // console.log("promptDetails", promptDetails);
  // console.log("newPromptDetails", newPromptDetails);

  return (
    <>
      <Modal
        show={!!userAction}
        onHide={handleAddEditPrompt}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateEditPrompts}>
            <Row>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Prompt Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  name="title"
                  maxLength={20}
                  value={newPromptDetails?.title}
                  onChange={handleChange}
                />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Prompt
                </label>
                <textarea
                  name="name"
                  rows="10"
                  className="form-control"
                  placeholder="Enter Prompt content"
                  value={newPromptDetails?.name}
                  onChange={handleChange}
                ></textarea>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleAddEditPrompt}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateEditPrompts}
            className="d-flex align-items-center justify-content-center commonBtn"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEditPromptPop;
