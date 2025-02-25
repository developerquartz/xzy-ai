import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// css
import "./setting.scss";
import { ReactComponent as OpenEye } from "../../../Assets/icons/openEye.svg";
import { ReactComponent as CloseEye } from "../../../Assets/icons/closedEye.svg";
import { ReactComponent as CoinsStack } from "../../../Assets/icons/CoinsStack.svg";
import { changePassword, updateProfile } from "../../../redux/profile/thunk";
import { passwordRegex } from "../../../services/validator";
import PlansAndBonus from "../Home/Component/PlansAndBonus/Index";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { currencySymbols, errorMsg } from "../../../utils";
import { getAllCredits } from "../../../redux/admin/creditPlans/thunk";

const SettingIndex = () => {
  const navigate = useNavigate();
  const { userProfile } = useSelector((state) => state.profile);
  const { allCreditPlans } = useSelector((state) => state.creditPlans);
  const [passwordDetails, setPasswordDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState([]);

  /**
   * Description:- This is settings page. Here user have 3 tabs 1.Accounts where user can change login credentiatls. 2.Subscriptions where user can see all available subscription plans. 3.Credits where user can check all available credit plans.
   * @returns {any}
   */

  const handleChange = (e) => {
    setPasswordDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangePassword = async () => {
    try {
      const request = {
        ...passwordDetails,
        userId: userProfile.data.id,
      };

      let response1 = {};
      let response2 = {};

      const { oldPassword, newPassword, confirmPassword, email } =
        passwordDetails;
      if (oldPassword || newPassword) {
        if (!oldPassword) return setErrors({ oldPassword: "*Required" });
        if (!newPassword) return setErrors({ newPassword: "*Required" });
        if (!passwordRegex.test(newPassword))
          return setErrors({
            newPassword:
              "Password must include minimum eight characters, at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
          });
        if (!confirmPassword)
          return setErrors({ confirmPassword: "*Required" });
        if (newPassword !== confirmPassword)
          return setErrors({
            confirmPassword: "Password and confirm Password should match",
          });

        response1 = await handleApiRequest(changePassword, request);
        console.log("change password respomnse", response1);
      }

      if (email !== userProfile.data.email) {
        response2 = await handleApiRequest(updateProfile, request);
        console.log("update profile respomnse", response2);
      }

      if (response1.isSuccess !== false && response2.isSuccess !== false) {
        navigate("/dashboard");
      }
    } catch (error) {
      errorMsg(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleChangePassword();
  };

  const handleAllCreditPlans = () => {
    const response = handleApiRequest(getAllCredits, {});
  };

  useEffect(() => {
    if (userProfile.data) {
      setPasswordDetails(userProfile.data);
    }
  }, [userProfile]);

  useEffect(() => {
    handleAllCreditPlans();
  }, []);

  // console.log("userProfile", userProfile);
  // console.log("passwordDetails", passwordDetails);
  // console.log("showPassword", showPassword);
  // console.log("allCreditPlans", allCreditPlans);

  return (
    <>
      <section className="Setting py-4 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="my-2">
              <div className="sectionHeader text-center mb-3">
                <h2 className="m-0 fw-bold">Settings</h2>
              </div>
            </Col>
            <div className="my-2">
              <Tab.Container id="left-tabs-example" defaultActiveKey="Account">
                <Col lg="6" className="mx-auto">
                  <Nav
                    variant="pills"
                    className="underLineTab"
                    style={{ flexWrap: "unset " }}
                  >
                    <Nav.Item className="w-100">
                      <Nav.Link
                        className="w-100 position-relative d-flex align-items-center justify-content-center bg-transparent"
                        eventKey="Account"
                      >
                        Account
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100">
                      <Nav.Link
                        className="w-100 position-relative d-flex align-items-center justify-content-center bg-transparent"
                        eventKey="Subscription"
                      >
                        Subscription
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-100">
                      <Nav.Link
                        className="w-100 position-relative d-flex align-items-center justify-content-center bg-transparent"
                        eventKey="Credits"
                      >
                        Credits
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Tab.Content className="pt-3">
                  <Tab.Pane eventKey="Account">
                    <Col lg="6" className="mx-auto">
                      <Form className="" onSubmit={handleSubmit}>
                        <Row>
                          <Col lg="12" className="my-2">
                            <input
                              type="email"
                              placeholder="lucky@abc.com"
                              className="form-control ps-4"
                              name="email"
                              value={passwordDetails.email || ""}
                              onChange={handleChange}
                            />
                          </Col>
                          <Col lg="12" className="my-2">
                            <div className="iconWithText position-relative">
                              <span
                                className="icn position-absolute pointer"
                                style={{ left: "unset", right: "10px" }}
                                onClick={() => {
                                  showPassword.includes("oldPassword")
                                    ? setShowPassword((prev) => {
                                        const shownpassword = prev.filter(
                                          (field) => field !== "oldPassword"
                                        );
                                        return shownpassword;
                                      })
                                    : setShowPassword((prev) => [
                                        ...prev,
                                        "oldPassword",
                                      ]);
                                }}
                              >
                                {showPassword.includes("oldPassword") ? (
                                  <CloseEye />
                                ) : (
                                  <OpenEye />
                                )}
                              </span>
                              <input
                                type={
                                  showPassword.includes("oldPassword")
                                    ? "text"
                                    : "password"
                                }
                                placeholder="Current Password"
                                className="form-control"
                                name="oldPassword"
                                value={passwordDetails.oldPassword || ""}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.oldPassword && (
                              <p className="errorMsg">{errors.oldPassword}</p>
                            )}
                          </Col>
                          <Col lg="12" className="my-2">
                            <div className="iconWithText position-relative">
                              <span
                                className="icn position-absolute pointer"
                                style={{ left: "unset", right: "10px" }}
                                onClick={() => {
                                  showPassword.includes("newPassword")
                                    ? setShowPassword((prev) => {
                                        const shownpassword = prev.filter(
                                          (field) => field !== "newPassword"
                                        );
                                        return shownpassword;
                                      })
                                    : setShowPassword((prev) => [
                                        ...prev,
                                        "newPassword",
                                      ]);
                                }}
                              >
                                {showPassword.includes("newPassword") ? (
                                  <CloseEye />
                                ) : (
                                  <OpenEye />
                                )}
                              </span>
                              <input
                                type={
                                  showPassword.includes("newPassword")
                                    ? "text"
                                    : "password"
                                }
                                placeholder="New Password"
                                className="form-control"
                                name="newPassword"
                                value={passwordDetails.newPassword || ""}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.newPassword && (
                              <p className="errorMsg">{errors.newPassword}</p>
                            )}
                          </Col>
                          <Col lg="12" className="my-2">
                            <div className="iconWithText position-relative">
                              <span
                                className="icn position-absolute pointer"
                                style={{ left: "unset", right: "10px" }}
                                onClick={() => {
                                  showPassword.includes("confirmPassword")
                                    ? setShowPassword((prev) => {
                                        const shownpassword = prev.filter(
                                          (field) => field !== "confirmPassword"
                                        );
                                        return shownpassword;
                                      })
                                    : setShowPassword((prev) => [
                                        ...prev,
                                        "confirmPassword",
                                      ]);
                                }}
                              >
                                {showPassword.includes("confirmPassword") ? (
                                  <CloseEye />
                                ) : (
                                  <OpenEye />
                                )}
                              </span>
                              <input
                                type={
                                  showPassword.includes("confirmPassword")
                                    ? "text"
                                    : "password"
                                }
                                placeholder="Confirm Password"
                                className="form-control"
                                name="confirmPassword"
                                value={passwordDetails.confirmPassword || ""}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.confirmPassword && (
                              <p className="errorMsg">
                                {errors.confirmPassword}
                              </p>
                            )}
                          </Col>
                          <Col lg="12" className="my-2">
                            <div className="py-2">
                              <Button
                                type="submit"
                                className="d-flex align-items-center justify-content-center commonBtn w-100"
                              >
                                Save
                              </Button>
                            </div>
                            {/* <div className="py-2">
                            <Link
                              to=""
                              className="fw-sbold theme-clr text-center d-block"
                            >
                              {" "}
                              User Agreement
                            </Link>
                          </div> */}
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Subscription">
                    <PlansAndBonus />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Credits">
                    <Col lg="6" className="mx-auto">
                      <p className="text-center">
                        Feeling hesitant to play around with ABC.AI ? Don't rob
                        yourself from the joy of finding that 1 winning script!
                        Buy more credits now and enjoy the freedom to
                        explore ABC.AI  and unlock your campaign's full
                        potential! Click below to get more credits now
                      </p>
                      <p className="text-center">
                        You have 99999994 subscription credits. Credits will be
                        renewed on And also you have 99999999 additional credits
                      </p>
                      <Row className="g-2">
                        {allCreditPlans.items?.map((plan) => (
                          <Col key={plan.id} lg="4">
                            <div className="text-center border rounded">
                              <CoinsStack />
                              <p>{plan.credit} credits</p>
                              <p>
                                {currencySymbols[plan.currency]} {plan.price}
                              </p>
                              <p>{`(${currencySymbols[plan.currency]}${
                                plan.pricePerCredit
                              } per credit)`}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <Col lg="12" className="my-2">
                        <div className="py-2">
                          <Button
                            type="submit"
                            className="commonBtn  d-flex align-items-center justify-content-center w-100"
                          >
                            Buy
                          </Button>
                        </div>
                      </Col>
                    </Col>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SettingIndex;
