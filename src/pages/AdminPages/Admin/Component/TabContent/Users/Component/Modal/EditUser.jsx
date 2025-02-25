import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {
  createUserFromAdmin,
  updateUserDetails,
} from "../../../../../../../../redux/admin/user/thunk";
import isEmail from "validator/lib/isEmail";
import { handleApiRequest } from "../../../../../../../../services/handleApiRequest";
import { errorMsg } from "../../../../../../../../utils";

const EditUserPop = ({ userAction, setUserAction, user, getUsersList }) => {
  const [userDetails, setUserDetails] = useState(
    userAction === "editUser" ? user : {}
  );

  const handleEditUser = () => {
    setUserAction(false);
    setUserDetails({});
  };

  const handleChange = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleNameChange = (e) => {
    let targetValue = e.target.value;
    let regex = /[^a-z ]/gi;
    let value = targetValue.replace(regex, "");

    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  const handleUpdateUserDetails = async () => {
    if (!userDetails.email) {
      return errorMsg("Email is required");
    } else if (!isEmail(userDetails.email)) {
      return errorMsg("Invalid email");
    }

    let response = {};

    if (userAction === "editUser") {
      response = await handleApiRequest(updateUserDetails, userDetails);
    } else if (userAction === "addUser") {
      response = await handleApiRequest(createUserFromAdmin, userDetails);
    }
    if (response.isSuccess) {
      await getUsersList();
      handleEditUser();
    }
  };

  // console.log("userDetails", userDetails);

  return (
    <>
      <Modal
        show={!!userAction}
        onHide={handleEditUser}
        backdrop="static"
        centered
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {userAction === "editUser" ? "Edit User" : "Add User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateUserDetails}>
            <Row>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                  maxLength={15}
                  name="firstName"
                  value={userDetails?.firstName || ""}
                  onChange={handleNameChange}
                  onKeyDown={(e) => {
                    const key = e.key;
                    if (!/[a-zA-Z]/i.test(key) && key !== " ") {
                      e.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  maxLength={15}
                  name="lastName"
                  value={userDetails?.lastName || ""}
                  onChange={handleNameChange}
                  onKeyDown={(e) => {
                    const key = e.key;
                    if (!/[a-zA-Z]/i.test(key) && key !== " ") {
                      e.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter user email"
                  name="email"
                  value={userDetails?.email || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Credits
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter user credits"
                  name="credits"
                  value={userDetails?.credits || ""}
                  onChange={handleChange}
                />
              </Col>
              {/* <Col lg="6" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  Subscription Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={
                    userDetails.subscriptionEndDate &&
                    new Date(userDetails.subscriptionEndDate) < new Date()
                      ? "Expired"
                      : !userDetails.subscriptionEndDate
                      ? "Inactive"
                      : "Active"
                  }
                />
              </Col> */}
              <Col lg="12" className="my-2">
                <label htmlFor="" className="form-label m-0 fw-sbold">
                  User Role
                </label>
                <Form.Select
                  className="form-control"
                  aria-label="Default select example"
                  name="role"
                  onChange={handleChange}
                  value={userDetails?.role}
                >
                  {[
                    {
                      value: "user",
                      label: "User",
                    },
                    {
                      value: "subadmin",
                      label: "Admin",
                    },
                  ].map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleEditUser}
          >
            Close
          </Button>
          <Button
            onClick={handleUpdateUserDetails}
            className="d-flex align-items-center justify-content-center commonBtn"
          >
            {userAction === "editUser" ? "Update" : "Add User"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUserPop;
