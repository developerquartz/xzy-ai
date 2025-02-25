import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
// icn
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
// files
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import {
  deleteCreditPlan,
  getAllCredits,
} from "../../../../../../redux/admin/creditPlans/thunk";
import AddEditCreditPlanPop from "./Component/AddEditPromt";
import { currencySymbols } from "../../../../../../utils";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- This component includes credit plans of users for admin.
 * @returns {any}
 */

const CreditPlans = () => {
  const { allCreditPlans } = useSelector((state) => state.creditPlans);

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

  const handleAllCreditPlans = async () => {
    const response = await handleApiRequest(getAllCredits, paginationDetails);
  };

  const handleDeleteCreditPlan = async () => {
    const response = await handleApiRequest(deleteCreditPlan, userAction.id);
    if (response.isSuccess) {
      await handleAllCreditPlans();
    }
  };

  useEffect(() => {
    handleAllCreditPlans();
  }, [paginationDetails]);

  // console.log("allCreditPlans", allCreditPlans);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Credit Plans</h4>
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
              onClick={() => setUserAction({ actionType: "add" })}
              className="d-flex align-items-center justify-content-center commonBtn"
            >
              + Add New Plan
            </Button>
          </div>
        </div>
        <div className="CardBody py-3">
          <div className="table-responsive py-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="">Number of Credits</th>
                  <th className="">Price</th>
                  <th className="">Cost per Credit</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {allCreditPlans.items?.map((plan) => (
                  <tr key={plan.id}>
                    <td>
                      <span className="">{plan.credit}</span>
                    </td>
                    <td>
                      {currencySymbols[plan.currency]}
                      {plan.price}
                    </td>
                    <td> {plan.pricePerCredit}</td>
                    <td>
                      <div className="d-flex TableBtnWrp align-items-center gap-10">
                        <Button
                          onClick={() =>
                            setUserAction({ actionType: "edit", id: plan.id })
                          }
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <PencilIcon />
                        </Button>
                        <Button
                          onClick={() =>
                            setUserAction({ actionType: "delete", id: plan.id })
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

      {(userAction?.actionType === "edit" ||
        userAction?.actionType === "add") && (
        <AddEditCreditPlanPop
          userAction={userAction}
          setUserAction={setUserAction}
          handleAllCreditPlans={handleAllCreditPlans}
        />
      )}
      {userAction?.actionType === "delete" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteCreditPlan}
        />
      )}
    </>
  );
};

export default CreditPlans;
