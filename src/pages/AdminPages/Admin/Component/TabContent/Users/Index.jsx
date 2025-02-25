import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as EyeIcon } from "../../../../../../Assets/icons/eye.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import EditUserPop from "./Component/Modal/EditUser";
import ViewUserPop from "./Component/Modal/ViewUser";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import MyPagination from "../../../../../../components/pagination";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
} from "../../../../../../redux/admin/user/thunk";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";
import { logData } from "../../../../../../services/logService";
import moment from "moment";
import isSubscriptionActive from "../../../../../../services/isSubscriptionActive";

/**
 * Description:- This component includes crud of users for admin.
 * @returns {any}
 */

const UsersTab = () => {
  const date = new Date();
  const { allUsers, userDetails } = useSelector((state) => state.users);
  const [userAction, setUserAction] = useState(false);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  const handleSearch = (e) => {
    setPaginationDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddUser = async () => {
    setUserAction("addUser");
  };

  const handleEditUser = async (user) => {
    const response = await handleApiRequest(getUserDetails, user.id);
    console.log("manish mittal", response);
    if (response.isSuccess) {
      setUserAction("editUser");
    }
  };

  const getUsersList = async () => {
    const response = await handleApiRequest(getAllUsers, paginationDetails);
  };

  const setDeleteAction = (user) => {
    setUserAction({ actionType: "deleteUser", id: user.id });
  };

  const handleDeleteUser = async () => {
    const response = await handleApiRequest(deleteUser, userAction.id);
    if (response.isSuccess) {
      await getUsersList();
    }
  };

  useEffect(() => {
    getUsersList();
  }, [paginationDetails]);

  // logData("allUsers", allUsers);
  // logData("userDetails", userDetails);
  // logData("userAction", userAction);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Users</h4>
            <Form>
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
              onClick={handleAddUser}
              className="d-flex align-items-center justify-content-center commonBtn"
            >
              + Add New user
            </Button>
          </div>
        </div>
        <div className="CardBody py-3">
          <div className="table-responsive py-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="">Email</th>
                  <th className="">Credits</th>
                  <th className="">Subscription</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.items?.map((user, index) => (
                  <tr key={user.id}>
                    <td>
                      <span className="fw-sbold theme-clr">{user.email}</span>
                    </td>
                    <td>{user.credits || 0}</td>
                    <td>
                      {!user.subscriptionEndDate
                        ? "Inactive"
                        : isSubscriptionActive(user.subscriptionEndDate)
                        ? `Active until (${moment(
                            user.subscriptionEndDate
                          ).format("MM/DD/YY")})`
                        : `Expired on (${moment(
                            user.subscriptionEndDate
                          ).format("MM/DD/YY")})`}
                    </td>
                    <td>
                      <div className="d-flex TableBtnWrp align-items-center gap-10">
                        <Button
                          onClick={() =>
                            setUserAction({
                              actionType: "viewUser",
                              id: user.id,
                            })
                          }
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <EyeIcon />
                        </Button>
                        <Button
                          onClick={() => handleEditUser(user)}
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <PencilIcon />
                        </Button>
                        <Button
                          onClick={() => setDeleteAction(user)}
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
        totalPosts={allUsers?.totalRecords}
      />

      {userAction?.actionType === "viewUser" && (
        <ViewUserPop userAction={userAction} setUserAction={setUserAction} />
      )}
      {(userAction === "editUser" || userAction === "addUser") && (
        <EditUserPop
          userAction={userAction}
          setUserAction={setUserAction}
          user={userDetails.data}
          getUsersList={getUsersList}
        />
      )}
      {userAction?.actionType === "deleteUser" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteUser}
        />
      )}
    </>
  );
};

export default UsersTab;
