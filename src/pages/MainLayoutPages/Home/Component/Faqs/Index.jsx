import React, { useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./SellYourProduct.scss";
import { getAllFaqs } from "../../../../../redux/admin/faqs/thunk";
import { handleApiRequest } from "../../../../../services/handleApiRequest";

/**
 * Description:- This component shows list of all FAQS added by admin (frequently asked questions)
 * @returns {any}
 */

const Faqs = () => {
  const { allFaqs } = useSelector((state) => state.faqs);

  const handleAllFaqs = async () => {
    const response = await handleApiRequest(getAllFaqs, {}, false);
  };

  useEffect(() => {
    handleAllFaqs();
  }, []);

  // console.log("allFaqs", allFaqs);

  return (
    <>
      <section
        className="SellYourProduct py-5"
        style={{ background: "#F7F7FA" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" className="my-2">
              <div className="sectionHeader mb-4 text-center">
                <h2 className="m-0 fw-bold text-dark">
                  {/* A.I Software Designed To Sell Your Products */}
                  Frequently Asked Questions
                </h2>
              </div>
            </Col>
            <Col lg="10" className="my-2">
              <Accordion>
                {allFaqs.items?.map(
                  (faq, index) =>
                    faq.status === "active" && (
                      <Accordion.Item
                        key={faq.id}
                        eventKey={index}
                        className="my-3 border-0"
                      >
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></Accordion.Body>
                      </Accordion.Item>
                    )
                )}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
