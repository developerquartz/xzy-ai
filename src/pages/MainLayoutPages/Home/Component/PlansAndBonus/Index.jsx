import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./GetStarted.scss";
import {
  getAllBonus,
  getAllSubscriptions,
} from "../../../../../redux/admin/subscriptions/thunk";
import { fileBaseUrl } from "../../../../../config";
import { currencySymbols } from "../../../../../utils";
import TryABCAiButton from "../../../../../components/tyrABCButton";
import { handleApiRequest } from "../../../../../services/handleApiRequest";
import { buySubscription } from "../../../../../redux/user/subscriptionPurchase/thunk";
import { logData } from "../../../../../services/logService";

/**
 * Description:- This component shows the list of all subscription plans and bonuses related to the plans.
 * @returns {any}
 */

const PlansAndBonus = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { allSubscriptions, allBonus } = useSelector(
    (state) => state.subscriptions
  );
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;
  const adminId = loggedinUser?.data?.id;

  const handleAllSubscriptions = async () => {
    const response = await handleApiRequest(getAllSubscriptions, {}, false);
  };

  const handleAllBonus = async () => {
    const response = await handleApiRequest(getAllBonus, {}, false);
  };

  const handleSubscriptionPurchase = async (id) => {
    if (!token) {
      return navigate("/login");
    }
    const request = {
      subscriptionId: id,
    };
    const response = await handleApiRequest(buySubscription, request);
    if (response.isSuccess) {
      window.location.href = response.data;
    }
  };

  useEffect(() => {
    handleAllSubscriptions();
    handleAllBonus();
  }, []);

  // logData("allSubscriptions", allSubscriptions);
  // logData("allBonus", allBonus);
  // logData("subscriptionPurchaseUrl", subscriptionPurchaseUrl);

  return (
    <>
      <section className="getStarted py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="my-2">
              <div className="sectionHeader mb-4 text-center">
                <h2 className="m-0 fw-bold text-dark">
                  Get Started with <span className="theme-clr">ABC.AI</span>
                  Today
                </h2>
                <div className="loader-wrapper d-flex align-items-center justify-content-center">
                  <div className="yellow"></div>
                  <div className="red"></div>
                  <div className="blue"></div>
                  <div className="violet"></div>
                </div>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <Row className="justify-content-center">
                {allSubscriptions.items?.map((plan) =>
                  !plan.isPopular ? (
                    <Col key={plan.id} lg="5" className="my-2 pricingCard">
                      <div className="cardCstm p-3 pt-5 px-lg-4 text-center h-100 position-relative">
                        <div className="top pb-3">
                          <h5 className="m-0 fw-sbold theme-clr py-2">
                            {plan.type.toUpperCase()}
                            {plan.bonus.length > 0 &&
                              ` - ${plan.bonus.length} SPECIAL BONUSES NOW
                            AVAILABLE!`}
                          </h5>
                          <h6 className="m-0 py-2">{plan.name}</h6>
                          <div className="price mt-3">
                            <h2 className="m-0 fw-bold">
                              {currencySymbols[plan.currency]}{" "}
                              {(plan.price / plan.monthCount).toFixed(0)}
                              <span className="">/month</span>
                            </h2>
                            <p className="m-0 py-2 mt-2">
                              {"(billed"} {currencySymbols[plan.currency]}{" "}
                              {(plan.price / plan.monthCount).toFixed(0)}
                              {"/month)"}
                            </p>
                          </div>
                          <div className="btnWrp mt-3">
                            <TryABCAiButton
                              title={`Try ABC.AI Now ${
                                plan.bonus.length > 0
                                  ? `+ ${plan.bonus.length} BONUSES`
                                  : ""
                              }`}
                              className={"bg-white theme-clr"}
                              onClick={() => {
                                handleSubscriptionPurchase(plan.id);
                              }}
                            />
                          </div>
                        </div>
                        <div className="CardBody py-3 border-top">
                          {pathname === "/pricing" && (
                            <p className="m-0 py-2">
                              Create an account and start making ABCs in a
                              minute.
                            </p>
                          )}
                          <p className="m-0 py-2">
                            30 day money back guarantee
                          </p>
                          <p className="m-0 py-2">
                            {plan.credits} credits/month (1 ABC = 1 credit)
                          </p>
                          <p className="m-0 py-2">
                            {plan.abcFormula} + Winning ABC Formulas
                          </p>
                          <div
                            className="text-start"
                            dangerouslySetInnerHTML={{
                              __html: plan.description,
                            }}
                          ></div>

                          <div className="py-2">
                            {plan.bonus.length > 0 && (
                              <>
                                <div className="labelBg m-0 rounded-pill fw-sbold text-white my-2 px-2">
                                  Limited Time Bonus
                                </div>
                                {allBonus.items?.map(
                                  (bonus) =>
                                    plan.id === bonus.subscriptionId && (
                                      <p
                                        key={bonus.id}
                                        className="m-0 py-2 theme-clr fw-sbold"
                                      >
                                        {bonus.title}
                                      </p>
                                    )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  ) : (
                    <Col key={plan.id} lg="5" className="my-2 pricingCard ">
                      <div className="cardCstm p-3 pt-5 active px-lg-4 text-center h-100 position-relative">
                        <div className="popuplar-tag">Popular</div>
                        <div className="top pb-3">
                          <h5 className="m-0 fw-bold theme-clr py-2">
                            {plan.type.toUpperCase()} - {plan.bonus.length}{" "}
                            SPECIAL BONUSES NOW AVAILABLE!
                          </h5>
                          <h6 className="m-0 py-2">{plan.name}</h6>
                          <div className="price mt-3">
                            <h2 className="m-0 fw-bold theme-clr">
                              {currencySymbols[plan.currency]}{" "}
                              {(plan.price / plan.monthCount).toFixed(0)}
                              <span className="">/month</span>
                            </h2>
                            <p className="m-0 py-2 mt-2">
                              {"(billed"} {currencySymbols[plan.currency]}{" "}
                              {(plan.price / plan.monthCount).toFixed(0)}
                              {"/month)"}
                            </p>
                          </div>
                          <div className="btnWrp mt-3">
                            <TryABCAiButton
                              title={`Try ABC.AI Now ${
                                plan.bonus.length > 0
                                  ? `+ ${plan.bonus.length} BONUSES`
                                  : ""
                              }`}
                              className={"w-100"}
                              onClick={() => {
                                handleSubscriptionPurchase(plan.id);
                              }}
                            />
                          </div>
                        </div>
                        <div className="CardBody py-3 border-top">
                          {pathname === "/pricing" && (
                            <p className="m-0 py-2">
                              Create an account and start making ABCs in a
                              minute.
                            </p>
                          )}
                          <p className="m-0 py-2">
                            30 day money back guarantee
                          </p>
                          <p className="m-0 py-2">
                            {plan.credits} credits/month (1 ABC = 1 credit)
                          </p>
                          <p className="m-0 py-2">
                            {plan.abcFormula} + Winning ABC Formulas
                          </p>
                          <div
                            className="text-start"
                            dangerouslySetInnerHTML={{
                              __html: plan.description,
                            }}
                          ></div>
                          <div className="py-2">
                            {plan.bonus.length > 0 && (
                              <>
                                <div className="labelBg m-0 rounded-pill fw-sbold text-white my-2 px-2">
                                  Limited Time Bonus
                                </div>
                                {allBonus.items?.map(
                                  (bonus) =>
                                    plan.id === bonus.subscriptionId && (
                                      <p
                                        key={bonus.id}
                                        className="m-0 py-2 theme-clr fw-sbold"
                                      >
                                        {bonus.title}
                                      </p>
                                    )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Col>
            <Col lg="7" className="my-2">
              <div className="sectionHeader mb-4 text-center">
                <h2 className="m-0 fw-bold text-dark">
                  Get 3 Bonuses Worth
                  <span className="theme-clr">$25,000+</span>
                  When You Subscribe To Annual
                </h2>
                <p className="m-0 py-2 fw-bold">
                  Act Fast, These Incredible Bonuses Won't Last Long
                </p>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <Row className="justify-content-center">
                {allBonus.items?.map((bonus, index) => (
                  <Col key={bonus.id} lg="5" className="my-2">
                    <div className="cardCstm bg-white p-lg-4 p-3 h-100">
                      <div className="top text-center">
                        <p className="m-0 fw-sbold theme-clr">
                          FREE BONUS #{index + 1}
                        </p>
                        <h4 className="m-0 py-2 fw-sbold">{bonus.title}</h4>
                        <p className="m-0 py-1">{bonus.subTitle}</p>
                        <div className="imgWrp">
                          <img
                            src={`${fileBaseUrl}${bonus.imgUrl}`}
                            alt=""
                            className="img-fluid w-100"
                          />
                        </div>
                      </div>
                      <div
                        className="CardBody"
                        dangerouslySetInnerHTML={{ __html: bonus.description }}
                      ></div>
                    </div>
                  </Col>
                ))}

                <Col lg="12" className="my-2">
                  <div className="btnWrpper text-center mt-3">
                    <TryABCAiButton className={"d-inline-flex"} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PlansAndBonus;
