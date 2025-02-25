import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import { ReactComponent as BackButton } from "../../../../../../Assets/icons/leftArrow.svg";
import {
  createFaq,
  deleteFaq,
  getAllFaqs,
  getFaqDetails,
  updateFaqDetails,
} from "../../../../../../redux/admin/faqs/thunk";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import MyPagination from "../../../../../../components/pagination";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";
import { errorMsg } from "../../../../../../utils";

/**
 * Description:- This component includes crud of faqs for admin.
 * @returns {any}
 */

const FAQTab = () => {
  const { allFaqs, faqDetails: oldFaqDetails } = useSelector(
    (state) => state.faqs
  );
  const [faqDetails, setFaqsDetails] = useState({});
  const [userAction, setUserAction] = useState(null);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    serach: "",
  });

  const handleChange = async (e) => {
    setFaqsDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPaginationDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleUserAction = (action) => {
    setUserAction(action);
  };

  const handleAllFaqs = async () => {
    const response = await handleApiRequest(getAllFaqs, paginationDetails);
  };

  const handleFaqDetails = async () => {
    const response = await handleApiRequest(getFaqDetails, userAction.id);
  };

  const handleUpdateOrCreateFaq = async () => {
    if (!faqDetails.question?.trim() || !faqDetails.answer?.trim()) {
      return errorMsg("Please enter FAQ");
    }

    let response = {};
    if (userAction?.actionType === "add") {
      response = await handleApiRequest(createFaq, faqDetails);
    } else if (!userAction || userAction?.actionType === "edit") {
      response = await handleApiRequest(updateFaqDetails, faqDetails);
      console.log("update FAQ response", response);
    }
    if (response.isSuccess) {
      await handleAllFaqs();
      setUserAction(null);
      setFaqsDetails({});
    }
  };

  const handleDeleteFaq = async () => {
    const response = await handleApiRequest(deleteFaq, userAction.id);
    if (response.isSuccess) {
      await handleAllFaqs();
    }
  };

  useEffect(() => {
    handleAllFaqs();
  }, [paginationDetails]);

  useEffect(() => {
    if (userAction?.actionType === "edit") {
      handleFaqDetails();
    }
  }, [userAction]);

  useEffect(() => {
    if (oldFaqDetails.data) {
      setFaqsDetails(oldFaqDetails.data);
    }
  }, [oldFaqDetails]);

  // console.log("faqDetails", faqDetails);
  // console.log("oldFaqDetails", oldFaqDetails);
  // console.log("allFaqs", allFaqs);

  return (
    <>
      {userAction?.actionType === "add" || userAction?.actionType === "edit" ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold d-flex align-items-center">
                  <p
                    onClick={() => {
                      setUserAction(null);
                      setFaqsDetails({});
                    }}
                    className="pointer"
                  >
                    <BackButton />
                  </p>
                  Add New FAQ
                </h4>
              </div>
              <div className="right">
                <Button
                  onClick={handleUpdateOrCreateFaq}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <Form
                className="px-lg-4 px-3"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Row>
                  <Col lg="6" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0 ">
                      Add Question
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control"
                      style={{ background: "#F5F5F5" }}
                      name="question"
                      value={faqDetails.question || ""}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0">
                      Content
                    </label>
                    <CKEditor
                      activeClass="p10"
                      content={faqDetails.answer || ""}
                      events={{
                        change: (evt) => {
                          setFaqsDetails((prev) => {
                            return {
                              ...prev,
                              answer: evt.editor.getData(),
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
                <h4 className="m-0 fw-bold">FAQ Management</h4>
                <Form onSubmit={handleSearch}>
                  <div className="searchForm position-relative iconWithText">
                    <input
                      type="text"
                      placeholder="search"
                      className="form-control"
                      name="search"
                      value={paginationDetails.search}
                      onChange={handleSearch}
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
                <Button
                  onClick={() => handleUserAction({ actionType: "add" })}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  + Add New FAQ
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <div className="table-responsive py-2">
                <table className="table">
                  <thead>
                    <tr>
                      {/* <th className="">Select</th> */}
                      <th className="">
                        Question{" "}
                        {/* <span className="icn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <path
                              d="M6.04492 10.5723V3.57227"
                              stroke="#6B7580"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.54492 7.07227L6.04492 3.57227L9.54492 7.07227"
                              stroke="#6B7580"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span> */}
                      </th>
                      <th className="">Updated At</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allFaqs.items?.map((faq) => (
                      <tr key={faq.id}>
                        {/* <td className="">
                          <div className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="form-check"
                              checked={
                                faqDetails.id === faq.id
                                  ? faqDetails.status
                                  : faq.status === "active"
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setFaqsDetails((prev) => {
                                  return {
                                    ...prev,
                                    status: e.target.checked,
                                    id: faq.id,
                                  };
                                });
                                handleUpdateOrCreateFaq({
                                  status: e.target.checked
                                    ? "active"
                                    : "inactive",
                                  id: faq.id,
                                });
                              }}
                            />
                          </div>
                        </td> */}
                        <td>
                          <span className="fw-sbold theme-clr ">
                            {faq.question}
                          </span>
                        </td>
                        <td>
                          <span className="fw-sbold theme-clr ">
                            {moment(faq.updatedAt).format("DD MMM YYYY, HH:MM")}
                          </span>
                        </td>

                        <td>
                          <div className="d-flex TableBtnWrp align-items-center gap-10 justify-content-end">
                            <Button
                              onClick={() =>
                                handleUserAction({
                                  actionType: "edit",
                                  id: faq.id,
                                })
                              }
                              className="border-0 p-0 "
                              variant="transparent"
                            >
                              <PencilIcon />
                            </Button>
                            <Button
                              onClick={() =>
                                handleUserAction({
                                  actionType: "delete",
                                  id: faq.id,
                                })
                              }
                              className="border-0 p-0 "
                              variant="transparent"
                            >
                              <DeleteIcon />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <MyPagination
            paginationDetails={paginationDetails}
            setPaginationDetails={setPaginationDetails}
            totalPosts={allFaqs?.totalRecords}
          />
        </>
      )}
      {userAction?.actionType === "delete" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteFaq}
        />
      )}
    </>
  );
};

export default FAQTab;
