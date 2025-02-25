import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useSelector } from "react-redux";
import { ReactComponent as PencilIcon } from "../../../../../../Assets/icons/pencil.svg";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import {
  deleteBot,
  getAllBots,
  updateBotDetails,
} from "../../../../../../redux/admin/bots/thunk";
import AddEditBotPop from "./Component/AddEditPromt";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import MyPagination from "../../../../../../components/pagination";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- This component includes crud of bots for admin.
 * @returns {any}
 */

const BotsTab = () => {
  const { allBots } = useSelector((state) => state.bots);

  const [userAction, setUserAction] = useState(null);
  const [botStatus, setBotStatus] = useState({});
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

  const handleAllBots = async () => {
    const response = await handleApiRequest(getAllBots, paginationDetails);
  };

  const handleDeleteBot = async () => {
    const response = await handleApiRequest(deleteBot, userAction.id);
    if (response.isSuccess) {
      await handleAllBots();
    }
  };

  const handleUpdateBotStatus = async () => {
    const request = {
      ...botStatus,
      status: botStatus.status ? "active" : "inactive",
    };
    const response = await handleApiRequest(updateBotDetails, request);
    if (response.isSuccess) {
      await handleAllBots();
      setBotStatus({});
    }
  };

  useEffect(() => {
    handleAllBots();
  }, [paginationDetails]);

  useEffect(() => {
    if (botStatus.id) {
      handleUpdateBotStatus();
    }
  }, [botStatus]);

  // console.log("allBots", allBots);
  // console.log("botDetails", botDetails);
  // console.log("oldBotDetails", oldBotDetails);
  // console.log("userAction", userAction);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Bots</h4>
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
              + Add New Bots
            </Button>
          </div>
        </div>
        <div className="CardBody py-3">
          <div className="table-responsive py-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="">Name</th>
                  <th className="">URL</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {allBots.items?.map((bot) => (
                  <tr key={bot.id}>
                    <td>
                      <span className="fw-sbold theme-clr">{bot.name}</span>
                    </td>
                    <td>
                      <span className="fw-sbold theme-clr">{bot.url}</span>
                    </td>
                    <td>
                      <div className="d-flex TableBtnWrp align-items-center gap-10">
                        <div className="cstmSwitch">
                          <BootstrapSwitchButton
                            className="rounded-pill"
                            onlabel="Yes"
                            offlabel="No"
                            width="80"
                            height={"40"}
                            checked={
                              botStatus.id === bot.id
                                ? botStatus.status
                                : bot.status === "active"
                                ? true
                                : false
                            }
                            onChange={(checked) => {
                              setBotStatus({
                                status: checked,
                                id: bot.id,
                              });
                            }}
                          />
                        </div>
                        <Button
                          onClick={() =>
                            setUserAction({ actionType: "edit", id: bot.id })
                          }
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <PencilIcon />
                        </Button>
                        <Button
                          onClick={() =>
                            setUserAction({ actionType: "delete", id: bot.id })
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
        totalPosts={allBots?.totalRecords}
      />

      {(userAction?.actionType === "add" ||
        userAction?.actionType === "edit") && (
        <AddEditBotPop
          userAction={userAction}
          setUserAction={setUserAction}
          selectedBot={userAction?.id}
          handleAllBots={handleAllBots}
        />
      )}
      {userAction?.actionType === "delete" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteBot}
        />
      )}
    </>
  );
};

export default BotsTab;
