import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import { useDispatch, useSelector } from "react-redux";
// icn
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import { ReactComponent as BackButton } from "../../../../../../Assets/icons/leftArrow.svg";
import {
  createBonus,
  createSubscriptionPlan,
  deleteBonus,
  deleteSubscriptions,
  getAllBonus,
  getAllSubscriptions,
  getBonusDetails,
  getPriceDetails,
  getPriceList,
  getSubscriptionsDetails,
  updateBonusDetails,
  updateSubscriptionsDetails,
} from "../../../../../../redux/admin/subscriptions/thunk";
import { uploadFile } from "../../../../../../redux/common/thunk";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import MyPagination from "../../../../../../components/pagination";
import { emptyFile } from "../../../../../../redux/common/slice";
import { fileBaseUrl } from "../../../../../../config";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";
import { logDOM } from "@testing-library/react";
import { logData } from "../../../../../../services/logService";
import { currencySymbols } from "../../../../../../utils";

/**
 * Description:- This component includes crud of subscription plans for admin.
 * @returns {any}
 */

const SubscriptionManagement = () => {
  const dispatch = useDispatch();
  const {
    allSubscriptions,
    subscriptionDetails: oldSubscriptionDetails,
    allBonus,
    bonusDetails: oldBonusDetails,
    subscriptionPriceList,
    priceDetails,
  } = useSelector((state) => state.subscriptions);
  const { uploadedFile } = useSelector((state) => state.common);

  const [subscriptionDetails, setSubscriptionDetails] = useState({});
  const [bonusDetails, setBonusDetails] = useState({});
  const [userAction, setUserAction] = useState(null);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    serachValue: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSubscriptionDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleBonusChange = (e) => {
    setBonusDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleBackButton = async () => {
    await dispatch(emptyFile());
    setUserAction(null);
    setSubscriptionDetails({});
    setBonusDetails({});
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const response = await handleApiRequest(uploadFile, formData);
  };

  const handleAllSubscriptions = async () => {
    const response = await handleApiRequest(
      getAllSubscriptions,
      paginationDetails
    );
  };

  const handleSubscriptionsDetails = async (id) => {
    const response = await handleApiRequest(getSubscriptionsDetails, id);
  };

  const handleAllPriceList = async () => {
    const response = await handleApiRequest(getPriceList);
  };

  const handlePriceDetails = async (e) => {
    const request = { price: e.target.value };
    if (e.target.value) {
      handleChange(e);
      const response = await handleApiRequest(getPriceDetails, request);
    }
  };

  const handleUpdateOrCreateSubscriptionPlan = async () => {
    let response = {};
    if (userAction.actionType === "addSubscription") {
      response = await handleApiRequest(
        createSubscriptionPlan,
        subscriptionDetails
      );
      console.log("add script response", response);
    } else if (userAction.actionType === "editSubscription") {
      response = await handleApiRequest(
        updateSubscriptionsDetails,
        subscriptionDetails
      );
      console.log("update script response", response);
    }
    if (response.isSuccess) {
      await handleAllSubscriptions();
      setUserAction(null);
      setSubscriptionDetails({});
    }
  };

  const handleDeleteSubscription = async () => {
    const response = await handleApiRequest(deleteSubscriptions, userAction.id);
    console.log("delete Subscription  response", response);
    if (response.isSuccess) {
      await handleAllSubscriptions();
    }
  };

  const handleAllBonus = async () => {
    const response = await handleApiRequest(getAllBonus, {});
  };

  const handleBonusDetails = async () => {
    const response = await handleApiRequest(getBonusDetails, userAction.id);
  };

  const handleUpdateOrCreateBonusPlan = async () => {
    const request = {
      ...bonusDetails,
      subscriptionId: userAction.subscriptionId,
      imgUrl: uploadedFile.data?.fileName,
    };
    let response = {};
    if (userAction.actionType === "addBonus") {
      response = await handleApiRequest(createBonus, request);
      console.log("add Bonus response", response);
    } else if (userAction.actionType === "editBonus") {
      response = await handleApiRequest(updateBonusDetails, request);
      console.log("update Bonus response", response);
    }
    if (response.isSuccess) {
      await handleAllBonus();
      dispatch(emptyFile());
      setUserAction(null);
      setBonusDetails({});
    }
  };

  const handleDeleteBonus = async () => {
    const response = await handleApiRequest(deleteBonus, userAction.id);
    if (response.isSuccess) {
      await handleAllBonus();
    }
  };

  useEffect(() => {
    handleAllSubscriptions();
    handleAllBonus();
  }, [paginationDetails]);

  useEffect(() => {
    if (oldSubscriptionDetails.data) {
      setSubscriptionDetails(oldSubscriptionDetails.data);
    }
  }, [oldSubscriptionDetails]);

  useEffect(() => {
    if (oldBonusDetails.data) {
      setBonusDetails(oldBonusDetails.data);
    }
  }, [oldBonusDetails]);

  useEffect(() => {
    if (userAction?.actionType === "editBonus") {
      handleBonusDetails();
    }
    if (
      userAction?.actionType === "addSubscription" ||
      userAction?.actionType === "editSubscription"
    ) {
      handleAllPriceList();
    }
    return () => {
      dispatch(emptyFile());
    };
  }, [userAction]);

  useEffect(() => {
    if (priceDetails.data) {
      const {
        currency,
        unit_amount,
        recurring: { interval, interval_count },
      } = priceDetails.data;
      setSubscriptionDetails((prev) => {
        return {
          ...prev,
          type: interval,
          monthCount: interval_count,
          price: unit_amount,
          currency: currency,
          imgUrl: "",
        };
      });
    }
  }, [priceDetails]);

  // logData("allSubscriptions", allSubscriptions);
  logData("subscriptionDetails", subscriptionDetails);
  logData("oldSubscriptionDetails", oldSubscriptionDetails);
  // logData("userAction", userAction);
  // logData("allBonus", allBonus);
  // logData("bonusDetails", bonusDetails);
  // logData("oldBonusDetails", oldBonusDetails);
  // logData("uploadedFile", uploadedFile);
  // logData("subscriptionPriceList", subscriptionPriceList);
  // logData("priceDetails", priceDetails);

  return (
    <>
      {!userAction ||
      userAction.actionType == "deleteSubscription" ||
      userAction.actionType == "deleteBonus" ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold">Subscription listing</h4>
                <Form onSubmit={handleSubmit}>
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
                  onClick={() => {
                    setUserAction({ actionType: "addSubscription" });
                  }}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  + Add New Subscription
                </Button>
              </div>
            </div>
            {allSubscriptions.items?.map((plan) => (
              <React.Fragment key={plan.id}>
                <div className="CardBody py-3">
                  <div className="table-responsive py-2">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="">Plan Name</th>
                          <th className="">Description</th>
                          <th className="">Subscription Fee</th>
                          <th className="">Subscription Validity</th>
                          <th className="">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="fw-sbold theme-clr">
                              {plan.name}
                            </span>
                          </td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: plan.description ? plan.description : "-",
                            }}
                          ></td>
                          <td>
                            {currencySymbols[plan.currency]} {plan.price}
                          </td>
                          <td>
                            {plan.monthCount} {plan.type}
                          </td>
                          <td>
                            <div className="d-flex TableBtnWrp align-items-center gap-10">
                              <Button
                                onClick={() => {
                                  setUserAction({
                                    actionType: "editSubscription",
                                    id: plan.id,
                                  });
                                  handleSubscriptionsDetails(plan.id);
                                }}
                                className="border-0 p-0 "
                                variant="transparent"
                              >
                                <PencilIcon />
                              </Button>
                              <Button
                                onClick={() =>
                                  setUserAction({
                                    actionType: "deleteSubscription",
                                    id: plan.id,
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
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="CardBody">
                  <div className="table-responsive py-2">
                    <table className="table" style={{ background: "#f5f5f5" }}>
                      <thead>
                        <tr>
                          <th className="">Title</th>
                          <th className="">Subtitle</th>
                          <th className="">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allBonus.items?.map(
                          (section) =>
                            section.subscriptionId === plan.id && (
                              <tr key={section.id}>
                                <td>
                                  <span className="fw-sbold theme-clr">
                                    {section.title}
                                  </span>
                                </td>
                                <td>
                                  <span className="fw-sbold theme-clr">
                                    {section.subTitle}
                                  </span>
                                </td>

                                <td>
                                  <div className="d-flex TableBtnWrp align-items-center gap-10 ">
                                    <Button
                                      onClick={() =>
                                        setUserAction({
                                          actionType: "editBonus",
                                          id: section.id,
                                        })
                                      }
                                      className="border-0 p-0 "
                                      variant="transparent"
                                    >
                                      <PencilIcon />
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        setUserAction({
                                          actionType: "deleteBonus",
                                          id: section.id,
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
                            )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bottom bg-white px-lg-4 px-3 bottom py-2">
                  <div className="d-flex align-items-center gap-10">
                    <Button
                      onClick={() => {
                        setUserAction({
                          actionType: "addBonus",
                          subscriptionId: plan.id,
                        });
                      }}
                      className="d-flex align-items-center justify-content-center commonBtn"
                    >
                      Add Bonus
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
      ) : ["addSubscription", "editSubscription"].includes(
          userAction.actionType
        ) ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold d-flex align-items-center">
                  <p onClick={handleBackButton} className="pointer">
                    <BackButton />
                  </p>
                  {userAction.actionType === "addSubscription"
                    ? "Add New Subscription"
                    : "Update Subscription"}
                </h4>
              </div>
              <div className="right">
                <Button
                  onClick={handleUpdateOrCreateSubscriptionPlan}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <Form
                className="px-lg-4 px-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <Row>
                  <Col lg="6" className="my-2">
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0 ">
                        Subscription Name
                      </label>
                      <input
                        type="text"
                        placeholder="Plan Name"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="name"
                        value={subscriptionDetails.name || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Select subscription
                      </label>
                      <Form.Select
                        className="form-control"
                        aria-label="Default select example"
                        style={{ backgroundColor: "#F5F5F5" }}
                        name="stripePriceId"
                        onChange={handlePriceDetails}
                        value={subscriptionDetails.stripePriceId || ""}
                      >
                        <option value={""}>Select a plan</option>
                        {subscriptionPriceList.data?.map((pricePlan) => (
                          <option key={pricePlan.id} value={pricePlan.id}>
                            {pricePlan.id}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0 ">
                        Subscription Price
                      </label>
                      <input
                        type="text"
                        placeholder="Plan price"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="price"
                        value={subscriptionDetails.price || ""}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Subscription Fee Currency
                      </label>
                      <input
                        type="text"
                        placeholder="Amount currency"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="currency"
                        value={subscriptionDetails.currency || ""}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Subscription Validity
                      </label>
                      <input
                        type="text"
                        placeholder="Plan type"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="price"
                        value={subscriptionDetails.type || ""}
                        onChange={handleChange}
                        disabled
                      />
                    </div>

                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Valid For <small>{"(months/years)"}</small>
                      </label>
                      <input
                        type="text"
                        placeholder="Validity in months"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="monthCount"
                        value={subscriptionDetails.monthCount || ""}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Credits
                      </label>
                      <input
                        type="text"
                        placeholder="Enter number of free credits"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="credits"
                        value={subscriptionDetails.credits || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        ABC Formulas
                      </label>
                      <input
                        type="text"
                        placeholder="Enter number of abc formulas"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="abcFormula"
                        value={subscriptionDetails.abcFormula || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="py-2 d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check me-2"
                        style={{ background: "#F5F5F5" }}
                        checked={subscriptionDetails.isPopular || false}
                        onChange={(e) => {
                          setSubscriptionDetails((prev) => {
                            return {
                              ...prev,
                              isPopular: e.target.checked,
                            };
                          });
                        }}
                      />
                      <label htmlFor="" className="fw-sbold m-0">
                        Select popularity
                      </label>
                    </div>
                  </Col>
                  <Col lg="6" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0">
                      Description
                    </label>

                    <CKEditor
                      activeClass="p10"
                      content={subscriptionDetails.description || ""}
                      events={{
                        change: (evt) => {
                          setSubscriptionDetails((prev) => {
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
        </>
      ) : ["editBonus", "addBonus"].includes(userAction.actionType) ? (
        <>
          <div className="cardCstm py-3">
            <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
              <div className="left d-flex align-items-center gap-10">
                <h4 className="m-0 fw-bold d-flex align-items-center">
                  <p onClick={handleBackButton} className="pointer">
                    <BackButton />
                  </p>
                  {userAction.actionType === "addBonus"
                    ? "Add New Bonus"
                    : "Edit Bonus"}
                </h4>
              </div>
              <div className="right">
                <Button
                  onClick={handleUpdateOrCreateBonusPlan}
                  className="d-flex align-items-center justify-content-center commonBtn"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="CardBody py-3">
              <Form className="px-lg-4 px-3">
                <Row>
                  <Col lg="6" className="my-2">
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0 ">
                        Bonus Title
                      </label>
                      <input
                        type="text"
                        placeholder="Bonus Title"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="title"
                        value={bonusDetails.title || ""}
                        onChange={handleBonusChange}
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="" className="fw-sbold m-0">
                        Sub Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Sub Title"
                        className="form-control"
                        style={{ background: "#F5F5F5" }}
                        name="subTitle"
                        value={bonusDetails.subTitle || ""}
                        onChange={handleBonusChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="fw-sbold m-0">
                        Upload Image
                      </label>
                      <div className="UploadProfile position-relative upload">
                        <input
                          type="file"
                          className="position-absolute h-100 w-100"
                          name="imgUrl"
                          onChange={(e) => handleFileUpload(e)}
                          accept=".png, .jpg, .jpeg"
                        />
                        <div className="imgWrp h-100 w-100">
                          <img
                            src={
                              uploadedFile.data
                                ? `${uploadedFile.data?.url}${uploadedFile.data?.fileName}`
                                : bonusDetails.imgUrl
                                ? `${fileBaseUrl}${bonusDetails.imgUrl}`
                                : "/assets/images/download.png"
                            }
                            alt=""
                            className="img-fluid rounded-circle w-100 h-100"
                          />
                        </div>
                        {/* <span className="icn position-absolute d-flex align-items-center justify-content-center">
                        <EditIcon />
                      </span> */}
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" className="my-2">
                    <label htmlFor="" className="fw-sbold m-0">
                      Description
                    </label>

                    <CKEditor
                      activeClass="p10"
                      content={bonusDetails.description}
                      events={{
                        change: (evt) => {
                          setBonusDetails((prev) => {
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
        </>
      ) : (
        <></>
      )}
      {!userAction && (
        <MyPagination
          paginationDetails={paginationDetails}
          setPaginationDetails={setPaginationDetails}
          totalPosts={allSubscriptions?.totalRecords}
        />
      )}
      {(userAction?.actionType === "deleteSubscription" ||
        userAction?.actionType === "deleteBonus") && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={
            userAction?.actionType === "deleteSubscription"
              ? handleDeleteSubscription
              : handleDeleteBonus
          }
        />
      )}
    </>
  );
};

export default SubscriptionManagement;
