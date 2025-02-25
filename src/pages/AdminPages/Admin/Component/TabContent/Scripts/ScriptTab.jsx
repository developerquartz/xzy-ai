import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import isURL from "validator/lib/isURL";
import { toast } from "react-toastify";
import CKEditor from "react-ckeditor-component";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import { ReactComponent as CommentIcon } from "../../../../../../Assets/icons/comment.svg";
import { ReactComponent as BackButton } from "../../../../../../Assets/icons/leftArrow.svg";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import ScriptReviewPop from "./Component/Modal/ScriptReviewPop";
import {
  deleteScript,
  getAllScripts,
  createScript,
  getAllPromptSections,
  getScriptDetails,
  updateScriptDetails,
} from "../../../../../../redux/admin/scripts/thunk";
import MyPagination from "../../../../../../components/pagination";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";
import { errorMsg } from "../../../../../../utils";
import preventMinus from "../../../../../../services/preventMinus";

/**
 * Description:- This component includes crud of scripts for admin.
 * @returns {any}
 */

const ScriptTab = () => {
  const {
    allScripts,
    allPromptSections,
    scriptDetails: oldScriptDetails,
  } = useSelector((state) => state.scripts);

  const [userAction, setUserAction] = useState(null);
  const [scriptReview, setScriptReview] = useState("");
  const [scriptDetails, setScriptDetails] = useState({});
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  const handleBackButton = async () => {
    setUserAction(null);
    setScriptDetails({});
  };

  const handleChange = (e) => {
    setScriptDetails((prev) => {
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

  const handleScriptReview = () => {
    setScriptReview(!scriptReview);
  };

  const handleAllScripts = async () => {
    const response = await handleApiRequest(getAllScripts, paginationDetails);
  };

  const handleDeleteScript = async () => {
    const response = await handleApiRequest(deleteScript, userAction.id);
    console.log("delete scripts response", response);
    if (response.isSuccess) {
      await handleAllScripts();
    }
  };

  const handleAllPromptSections = async () => {
    const response = await handleApiRequest(getAllPromptSections, {});
  };

  const handleScriptDetails = async () => {
    const response = await handleApiRequest(getScriptDetails, userAction.id);
  };

  const handleUpdateOrCreateScripts = async () => {
    if (
      !scriptDetails.promptSectionId ||
      scriptDetails.promptSectionId === "false"
    ) {
      return errorMsg("Please select a section");
    }
    if (!scriptDetails.link || !isURL(scriptDetails.link)) {
      return errorMsg("Invalid link");
    }

    let response = {};
    if (userAction.actionType === "addScript") {
      response = await handleApiRequest(createScript, scriptDetails);
      console.log("add script response", response);
    } else if (userAction.actionType === "editScript") {
      response = await handleApiRequest(updateScriptDetails, scriptDetails);
      console.log("update script response", response);
    }
    if (response.isSuccess) {
      await handleAllScripts();
      setUserAction(null);
    }
  };

  useEffect(() => {
    handleAllScripts();
  }, [paginationDetails]);

  useEffect(() => {
    if (
      userAction?.actionType === "editScript" ||
      userAction?.actionType === "addScript"
    ) {
      handleAllPromptSections();
    }
    if (userAction?.actionType === "editScript") {
      handleScriptDetails();
    }
  }, [userAction]);

  useEffect(() => {
    if (userAction?.actionType === "editScript" && oldScriptDetails.data) {
      setScriptDetails(oldScriptDetails.data);
    }
  }, [oldScriptDetails]);

  // console.log("allScripts", allScripts);
  // console.log("userAction", userAction);
  // console.log("scriptDetails", scriptDetails);
  // console.log("allPromptSections", allPromptSections);
  // console.log("oldScriptDetails", oldScriptDetails);

  return (
    <>
      {!userAction || userAction?.actionType === "deleteScript" ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold">Scripts</h4>
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
                  onClick={() =>
                    setUserAction({ actionType: "addScript", id: null })
                  }
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  + Add New Script
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <div className="table-responsive py-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="">Name</th>
                      <th className="">Title</th>
                      <th className="">Rating </th>
                      <th className="">Prompt</th>
                      <th className="">AVE cost</th>
                      <th className="">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allScripts.items?.map((script) => (
                      <tr key={script.id}>
                        <td>
                          <span className="fw-sbold theme-clr">
                            {script.name}
                          </span>
                        </td>
                        <td>{script.title}</td>
                        <td>{script.rating}</td>
                        <td>{script.promptSection?.name}</td>
                        <td>00</td>
                        <td>
                          <div className="d-flex TableBtnWrp align-items-center gap-10">
                            {/* <Button
                          onClick={handleScriptReview}
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <CommentIcon />
                        </Button> */}
                            <Button
                              onClick={() =>
                                setUserAction({
                                  actionType: "editScript",
                                  id: script.id,
                                })
                              }
                              className="border-0 p-0 "
                              variant="transparent"
                            >
                              <PencilIcon />
                            </Button>
                            <Button
                              onClick={(e) =>
                                setUserAction({
                                  actionType: "deleteScript",
                                  id: script.id,
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
            totalPosts={allScripts?.totalRecords}
          />
        </>
      ) : userAction?.actionType === "addScript" ||
        userAction?.actionType === "editScript" ? (
        <div className="cardCstm py-3">
          <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
            <div className="left d-flex align-items-center gap-10">
              <h4 className="m-0 fw-bold d-flex align-items-center">
                <p onClick={handleBackButton} className="pointer mb-0 me-1">
                  <BackButton />
                </p>
                Scripts
              </h4>
            </div>
            <div className="right">
              <Button
                onClick={handleUpdateOrCreateScripts}
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
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Script Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      name="name"
                      value={scriptDetails.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Script Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter title"
                      name="title"
                      value={scriptDetails.title}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Cost
                      <small style={{ fontSize: 10 }}>{`(In Credits)`}</small>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter cost"
                      name="price"
                      min={0}
                      value={scriptDetails.price}
                      onChange={handleChange}
                      onKeyDown={preventMinus}
                    />
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Script formula
                    </label>
                    <textarea
                      id=""
                      rows="4"
                      className="form-control"
                      placeholder="Enter formula"
                      name="formula"
                      value={scriptDetails.formula}
                      onChange={handleChange}
                    ></textarea>
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Script framework
                    </label>
                    <textarea
                      id=""
                      rows="4"
                      className="form-control"
                      placeholder="Enter framework"
                      name="framework"
                      value={scriptDetails.framework}
                      onChange={handleChange}
                    ></textarea>
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Script Section
                    </label>
                    <Form.Select
                      className="form-control"
                      aria-label="Default select example"
                      name="promptSectionId"
                      onChange={handleChange}
                    >
                      <option value={false}>Choose Section</option>

                      {Object.entries(allPromptSections?.items || {})?.map(
                        (promptSection) => (
                          <option
                            key={promptSection.id}
                            value={promptSection[0]}
                            selected={
                              promptSection[0] == scriptDetails.promptSectionId
                            }
                          >
                            {promptSection[1]}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>
                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter link"
                      name="link"
                      value={scriptDetails.link}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col lg="12" className="my-2">
                    <label htmlFor="" className="form-label m-0 fw-sbold">
                      Displaying a link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter display link"
                      name="displayLink"
                      value={scriptDetails.displayLink}
                      onChange={handleChange}
                    />
                  </Col>
                </Col>
                <Col lg="6" className="my-2">
                  <label htmlFor="" className="fw-sbold m-0">
                    Description
                  </label>

                  <CKEditor
                    activeClass="p10"
                    content={scriptDetails.description || ""}
                    events={{
                      change: (evt) => {
                        setScriptDetails((prev) => {
                          return {
                            ...prev,
                            description: evt.editor.getData(),
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
      ) : (
        <></>
      )}

      {/* <ScriptReviewPop
        scriptReview={scriptReview}
        setScriptReview={setScriptReview}
      /> */}

      {userAction?.actionType === "deleteScript" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteScript}
        />
      )}
    </>
  );
};

export default ScriptTab;
