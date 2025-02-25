import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import { ReactComponent as TickMark } from "../../../../../../Assets/icons/tick.svg";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import AddEditPromptPop from "./Component/AddEditPromt";

import {
  createSection,
  deletePrompt,
  deleteSection,
  getAllPrompts,
  updatePromoptDetails,
  updateSectionDetails,
} from "../../../../../../redux/admin/prompts/thunk";
import MyPagination from "../../../../../../components/pagination";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- This component includes crud of prompts and sections under prompts for admin.
 * @returns {any}
 */

const PromotsTab = () => {
  const { allPrompts } = useSelector((state) => state.prompts);
  const [userAction, setUserAction] = useState(false);
  const [sectionDetails, setSectionDetails] = useState({});
  const [promptStatus, setPromptStatus] = useState({});
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setPaginationDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleDeletePop = (prompt) => {
    setUserAction("deletePrompt");
    setSelectedPrompt(prompt.id);
  };

  const handleAddEditPrompt = (prompt) => {
    setUserAction(prompt.action);
    setSelectedPrompt(prompt.id);
  };

  const handleSection = (section) => {
    setSectionDetails(section);
  };

  const handleChange = (e, id) => {
    setSectionDetails((prev) => {
      return {
        ...prev,
        section: {
          ...prev?.section,
          [e.target.name]: e.target.value,
          editingSectionId: id.sectionId,
          editingPromptId: id.promptId,
        },
      };
    });
  };

  const handleAllPrompts = async () => {
    const response = await handleApiRequest(getAllPrompts, paginationDetails);
  };

  const handleUpdatePromptsViewStatus = async (promptStatus) => {
    const request = {
      id: promptStatus.id,
      status: promptStatus.status ? "active" : "inactive",
    };
    const response = await handleApiRequest(updatePromoptDetails, request);
    console.log("update prompt response", response);
    if (response.isSuccess) {
      handleAllPrompts();
    }
  };

  const handleDeletePrompt = async () => {
    const response = await handleApiRequest(deletePrompt, selectedPrompt);
    if (response.isSuccess) {
      await handleAllPrompts();
    }
  };

  const handleAddSection = async (prompt) => {
    if (!sectionDetails?.section?.name) {
      return errorMsg("Please enter name");
    }

    const request = {
      ...sectionDetails.section,
      promptId: prompt.id,
    };
    const response = await handleApiRequest(createSection, request);
    console.log("add section response", response);
    if (response.isSuccess) {
      setSectionDetails(null);
      await handleAllPrompts();
    }
  };

  const handleUpdateSection = async () => {
    if (!sectionDetails?.section?.name) {
      return errorMsg("Please enter name");
    }
    const response = await handleApiRequest(
      updateSectionDetails,
      sectionDetails.section
    );
    console.log("update section response", response);
    if (response.isSuccess) {
      setSectionDetails(null);
      await handleAllPrompts();
    }
  };

  const handleDeleteSection = async () => {
    const response = await handleApiRequest(
      deleteSection,
      sectionDetails?.section?.id
    );
    console.log("delete section response", response);
    if (response.isSuccess) {
      await handleAllPrompts();
    }
  };

  useEffect(() => {
    handleAllPrompts();
  }, [paginationDetails]);

  // console.log("allPrompts", allPrompts);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Prompts</h4>
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
                handleAddEditPrompt({ action: "addPrompt", id: null })
              }
              className="d-flex align-items-center justify-content-center commonBtn btnSm"
            >
              + Add New Prompts
            </Button>
          </div>
        </div>
        <div className="CardBody pt-3">
          <div className="px-lg-4 px-3 pb-3 top border-bottom">
            <h6 className="m-0 fw-sbold">Title</h6>
          </div>
          <div className="commonContent py-2 ">
            <ul className="list-unstyled ps-0 mb-0">
              <li className="">
                {allPrompts.items?.map((prompt) => (
                  <React.Fragment key={prompt.id}>
                    <div className="top py-2 d-flex align-items-center justify-content-between gap-10  px-lg-4 px-3">
                      <div className="left">
                        <p className="m-0 fw-sbold">{prompt.title}</p>
                      </div>
                      <div className="right d-flex align-items-center gap-10">
                        <div className="cstmSwitch">
                          <BootstrapSwitchButton
                            className="rounded-pill"
                            checked={
                              promptStatus === prompt.id
                                ? promptStatus.status
                                : prompt.status === "active"
                                ? true
                                : false
                            }
                            onChange={(checked) => {
                              setPromptStatus({
                                status: checked,
                                id: prompt.id,
                              });
                              handleUpdatePromptsViewStatus({
                                status: checked,
                                id: prompt.id,
                              });
                            }}
                            onlabel="Yes"
                            offlabel="No"
                            width="80"
                            height={"40"}
                          />
                        </div>
                        <Button
                          onClick={() =>
                            handleAddEditPrompt({
                              action: "editPrompt",
                              id: prompt.id,
                            })
                          }
                          className="border-0 p-0"
                          variant="transparent"
                        >
                          <PencilIcon />
                        </Button>
                        <Button
                          onClick={(e) => handleDeletePop(prompt)}
                          className="border-0 p-0"
                          variant="transparent"
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                    <div className="CardBody">
                      <div className="table-responsive py-2">
                        <table
                          className="table"
                          style={{ background: "#f5f5f5" }}
                        >
                          <tbody>
                            {prompt.sections?.map((section) => (
                              <tr key={section.id}>
                                <td>
                                  {sectionDetails?.action === "edit" &&
                                  sectionDetails?.section?.id === section.id ? (
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="name"
                                      value={
                                        sectionDetails?.section
                                          ?.editingSectionId === section.id
                                          ? sectionDetails?.section?.name
                                          : section.name
                                      }
                                      onChange={(e) =>
                                        handleChange(e, {
                                          sectionId: section.id,
                                        })
                                      }
                                    />
                                  ) : (
                                    <span className="fw-sbold theme-clr">
                                      {section.name}
                                    </span>
                                  )}
                                </td>

                                <td>
                                  <div className="d-flex TableBtnWrp align-items-center gap-10 justify-content-end">
                                    {sectionDetails?.action === "edit" &&
                                    sectionDetails?.section?.id ===
                                      section.id ? (
                                      <Button
                                        onClick={() => handleUpdateSection()}
                                        className="border-0 p-0 "
                                        variant="transparent"
                                      >
                                        <TickMark />
                                      </Button>
                                    ) : (
                                      <Button
                                        onClick={() =>
                                          handleSection({
                                            action: "edit",
                                            section: section,
                                          })
                                        }
                                        className="border-0 p-0 "
                                        variant="transparent"
                                      >
                                        <PencilIcon />
                                      </Button>
                                    )}
                                    <Button
                                      onClick={() =>
                                        handleSection({
                                          action: "delete",
                                          section: section,
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
                    <div className="bottom bg-white px-lg-4 px-3 bottom py-2">
                      <div className="d-flex align-items-center gap-10">
                        <input
                          type="text"
                          placeholder="Name of Section"
                          className="form-control"
                          name="name"
                          value={
                            sectionDetails?.section?.editingPromptId ===
                            prompt.id
                              ? sectionDetails?.section?.name
                              : ""
                          }
                          onChange={(e) =>
                            handleChange(e, { promptId: prompt.id })
                          }
                        />
                        <Button
                          onClick={() => handleAddSection(prompt)}
                          className="d-flex align-items-center justify-content-center commonBtn"
                        >
                          Add Section
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MyPagination
        paginationDetails={paginationDetails}
        setPaginationDetails={setPaginationDetails}
        totalPosts={allPrompts?.totalRecords}
      />
      {(userAction === "addPrompt" || userAction === "editPrompt") && (
        <AddEditPromptPop
          userAction={userAction}
          setUserAction={setUserAction}
          selectedPrompt={selectedPrompt}
          handleAllPrompts={handleAllPrompts}
        />
      )}
      {(userAction === "deletePrompt" ||
        sectionDetails?.action === "delete") && (
        <DeletePopup
          userAction={userAction || sectionDetails?.action}
          setUserAction={userAction ? setUserAction : setSectionDetails}
          onDelete={userAction ? handleDeletePrompt : handleDeleteSection}
        />
      )}
    </>
  );
};

export default PromotsTab;
