import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import isEmail from "validator/lib/isEmail";
import "./contact.scss";
import heroBg from "../../../Assets/Images/heroBg.svg";
import { contactUs } from "../../../redux/contactus/thunk";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { errorMsg, successMsg } from "../../../utils";

/**
 * Description:- This component includes form to ask query from admin. User can submit their query to admin by submitting the required details.
 * @returns {any}
 */

const ContactPage = () => {
  const [details, setDetails] = useState({});

  const handleChange = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.name || !details.email || !details.message) {
      return errorMsg("Please fill all details");
    }

    if (details.email && !isEmail(details.email)) {
      return errorMsg("Invalid email");
    }

    const response = await handleApiRequest(contactUs, details);
    console.log("contact response", response);
    if (response.isSuccess) {
      successMsg("Query sent to Admin");
      setDetails({});
    }
  };

  return (
    <>
      <section
        className="contactPage position-relative py-5"
        style={{
          backgroundColor: "#fdf9ff",
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "0 100%",
          backgroundAttachment: "scroll",
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="5" className="my-2">
              <div className="sectionHeader mb-4 text-center">
                <h2 className="m-0 fw-bold text-dark mb-3">Contact Us</h2>
                <p className="py-2 fw-sbold text-muted">
                  Have questions about ABC.AI? Send us a message below.
                </p>
              </div>
            </Col>
            <Col lg="10" className="my-2">
              <div className="cardCstm p-lg-5 p-3">
                <Form className="pb-5" onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="name"
                        value={details.name || ""}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        name="email"
                        value={details.email || ""}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="12" className="my-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Questions
                      </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        name="message"
                        value={details.message || ""}
                        onChange={handleChange}
                      ></textarea>
                    </Col>
                    <Col lg="12" className="my-2">
                      <div className="btnWrpp mt-3">
                        <Button
                          type="submit"
                          className="d-flex align-items-center justify-content-center commonBtn rounded-pill w-100"
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
