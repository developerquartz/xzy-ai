import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../../../../../../../redux/admin/user/thunk";
import moment from "moment";
import { handleApiRequest } from "../../../../../../../../services/handleApiRequest";
import { logData } from "../../../../../../../../services/logService";
import isSubscriptionActive from "../../../../../../../../services/isSubscriptionActive";

const ViewUserPop = ({ userAction, setUserAction }) => {
  const { userDetails } = useSelector((state) => state.users);

  const handleViewUser = () => {
    setUserAction(false);
  };

  const handleUserDetails = async () => {
    const response = await handleApiRequest(getUserDetails, userAction.id);
  };

  useEffect(() => {
    handleUserDetails();
  }, []);

  // logData("userDetails", userDetails);

  return (
    <>
      <Modal
        show={!!userAction}
        onHide={handleViewUser}
        backdrop="static"
        centered
        scrollable="true"
        className="FormPop"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="commonContent">
            <div
              className="cardCstm p-3 shadow-sm mb-3"
              style={{ borderRadius: "10px", background: "#f5f5f5" }}
            >
              <Row>
                <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    Name :
                  </label>
                  <p className="m-0 fw-sbold">{userDetails.data?.name}</p>
                </Col>
                <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    Email :
                  </label>
                  <p className="m-0 fw-sbold">{userDetails.data?.email}</p>
                </Col>
                <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    Subscription Plan :
                  </label>
                  <p className="m-0 fw-sbold">Bronz</p>
                </Col>
                <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    Subscription status :
                  </label>
                  <p className="m-0 fw-sbold">
                    {!userDetails.data?.subscriptionEndDate
                      ? "Inactive"
                      : isSubscriptionActive(
                          userDetails.data?.subscriptionEndDate
                        )
                      ? `Active until (${moment(
                          userDetails.data?.subscriptionEndDate
                        ).format("MM/DD/YY")})`
                      : `Expired on (${moment(
                          userDetails.data?.subscriptionEndDate
                        ).format("MM/DD/YY")})`}
                  </p>
                </Col>
                <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    User created At:
                  </label>
                  <p className="m-0 fw-sbold">
                    {moment(userDetails.data?.createdAt).format(
                      "DD MMM, YYYY HH:MM"
                    )}
                  </p>
                </Col>
                {/* <Col lg="6" className="my-3">
                  <label htmlFor="" className="form-label m-0">
                    Subscription Credit :
                  </label>
                  <p className="m-0 fw-sbold">$</p>
                </Col> */}
              </Row>
            </div>
            <p className="m-0 py-2 fw-bold">
              Credits:{" "}
              <span className="text-muted">
                {userDetails.data?.credits || 0}
              </span>
            </p>
            <div className="table-responsvie">
              <table className="table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Last transaction</th>
                    <th>Remaining Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.data?.userCreditHistories?.map(
                    (creditsHistory) => (
                      <tr key={creditsHistory.id}>
                        <td>
                          <p className=" m-0">
                            <span className="theme-clr d-block">
                              {creditsHistory.updatedBy}
                            </span>
                            {moment(creditsHistory.updatedAt).format(
                              "DD MMM YYYY, HH:MM"
                            )}
                          </p>
                        </td>
                        <td>
                          <span
                            className={
                              creditsHistory.type === "debit"
                                ? "text-danger"
                                : "text-success"
                            }
                          >
                            {creditsHistory.credit}
                          </span>
                        </td>
                        <td>{creditsHistory.remainingCredit}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-center commonBtn"
            onClick={handleViewUser}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewUserPop;
