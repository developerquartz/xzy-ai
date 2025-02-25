import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import { useSelector } from "react-redux";
import { ReactComponent as BackButton } from "../../../../../../Assets/icons/leftArrow.svg";
import {
  getAllContentPages,
  getContentPageDetails,
  updateContentPageDetails,
} from "../../../../../../redux/admin/contentPages/thunk";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- Admin can view and update content page here.
 * @returns {any}
 */

const ContentPageTab = ({ pageDetails }) => {
  const { contentPageDetails: oldContentPageDetails } = useSelector(
    (state) => state.contentPages
  );

  const [editPage, setEditPage] = useState("");
  const [contentPageDetails, setContentPageDetails] = useState({});

  const handleChnage = (e) => {
    setContentPageDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleEditPage = () => {
    setEditPage(!editPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAllContentPages = async () => {
    const response = await handleApiRequest(getAllContentPages, {}, false);
  };

  const handleContentDetails = async () => {
    const response = await handleApiRequest(
      getContentPageDetails,
      pageDetails?.id
    );
  };

  const handleUpdateContent = async () => {
    const request = {
      ...contentPageDetails,
      type: pageDetails.type,
    };
    const response = await handleApiRequest(updateContentPageDetails, request);
    console.log("updateContentPageDetails response", response);
    if (response.isSuccess) {
      setEditPage("");
      handleAllContentPages();
    }
  };

  useEffect(() => {
    handleContentDetails();
  }, []);

  useEffect(() => {
    if (oldContentPageDetails?.length > 0) {
      const myPageContent = oldContentPageDetails?.find(
        (content) => content?.id === pageDetails.id
      );
      if (myPageContent) {
        setContentPageDetails(myPageContent);
      } else {
        setContentPageDetails({});
      }
    }
  }, [oldContentPageDetails]);

  // console.log("contentPageDetails", oldContentPageDetails);
  // console.log("pageDetails", pageDetails);

  return (
    <>
      {editPage ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold d-flex align-items-center">
                  <p
                    onClick={() => {
                      setEditPage();
                    }}
                    className="pointer"
                  >
                    <BackButton />
                  </p>
                  {contentPageDetails?.name}
                </h4>
              </div>
              <div className="right">
                <Button
                  onClick={handleUpdateContent}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <Form className="px-lg-4 px-3" onSubmit={handleSubmit}>
                <Row>
                  <Col lg="6" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0 ">
                      Add Title
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control"
                      style={{ background: "#F5F5F5" }}
                      name="name"
                      value={contentPageDetails.name}
                      onChange={handleChnage}
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0">
                      Content
                    </label>
                    <CKEditor
                      activeClass="p10"
                      content={contentPageDetails.content}
                      events={{
                        change: (e) => {
                          setContentPageDetails((prev) => {
                            return {
                              ...prev,
                              content: e.editor.getData(),
                            };
                          });
                        },
                      }}
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold">{contentPageDetails?.name}</h4>
              </div>
              <div className="right">
                <Button
                  onClick={handleEditPage}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <div
                className="px-lg-4 px-3"
                dangerouslySetInnerHTML={{
                  __html: contentPageDetails?.content,
                }}
              ></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContentPageTab;
