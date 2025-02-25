import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as EyeIcon } from "../../../../../../Assets/icons/eye.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";

const DashboardTab = () => {
  return (
    <>
      <div className="py-2">
        <div className="top">
          <h4 className="m-0 fw-bold">Dashboard</h4>
        </div>
        <Row className="listCardWrp mb-3">
          <Col lg="3" sm="6" className="my-2">
            <div
              className="ListCard h-100 p-3 p-lg-4"
              style={{ background: "#E9EAEE" }}
            >
              <h4 className="m-0 fw-sbold">1020</h4>
              <p className="m-0">Registered Users</p>
            </div>
          </Col>
          <Col lg="3" sm="6" className="my-2">
            <div
              className="ListCard h-100 p-3 p-lg-4"
              style={{ background: "#F6F6F6" }}
            >
              <h4 className="m-0 fw-sbold">15</h4>
              <p className="m-0">Total Subscription</p>
            </div>
          </Col>
          <Col lg="3" sm="6" className="my-2">
            <div
              className="ListCard h-100 p-3 p-lg-4"
              style={{ background: "#F2EBFD" }}
            >
              <h4 className="m-0 fw-sbold">50</h4>
              <p className="m-0">Total Revenue Generated</p>
            </div>
          </Col>
          <Col lg="3" sm="6" className="my-2">
            <div className="ListCard h-100 p-3 p-lg-4">
              <h4 className="m-0 fw-sbold">120Hrs</h4>
              <p className="m-0">Time Taken</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <Form>
              <div className="searchForm position-relative iconWithText">
                <input
                  type="text"
                  placeholder="search"
                  className="form-control"
                />
                <Button
                  className="border-0 p-0 position-absolute icn"
                  variant="transparent"
                >
                  <SearchIcon />
                </Button>
              </div>
            </Form>
          </div>
          <div className="right">
            <div className="d-flex align-items-center gap-10">
              <label
                htmlFor=""
                className="form-label m-0 text-muted"
                style={{ whiteSpace: "nowrap" }}
              >
                Filter By
              </label>
              <Form.Select
                className="form-control"
                style={{ background: "#f1f1f1" }}
                aria-label="Default select example"
              >
                <option>User Name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="CardBody py-3">
          <div className="table-responsive py-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="">First Name</th>
                  <th className="">Last Name</th>
                  <th className="">Email</th>
                  <th className="">Mobile</th>
                  <th className="">Subscription</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>- </td>
                  <td>
                    <span className="fw-sbold theme-clr">Bronze </span>
                  </td>
                  <td> Lorem Ipsum is simply dummy... </td>
                  <td>$250</td>
                  <td> 09/26/2023</td>
                  <td>
                    <div className="d-flex TableBtnWrp align-items-center gap-10">
                      <Button
                        // onClick={() => handleEditUser(user)}
                        className="border-0 p-0 "
                        variant="transparent"
                      >
                        <PencilIcon />
                      </Button>
                      <Button
                        // onClick={() => setDeleteAction(user)}
                        className="border-0 p-0 "
                        variant="transparent"
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTab;
