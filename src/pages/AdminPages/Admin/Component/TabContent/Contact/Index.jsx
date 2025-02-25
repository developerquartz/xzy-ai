import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../../../../../Assets/icons/search.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../Assets/icons/delete.svg";
import { ReactComponent as EyeIcon } from "../../../../../../Assets/icons/eye.svg";
import {
  deleteContactus,
  getAllContact,
} from "../../../../../../redux/contactus/thunk";
import DeletePopup from "../../../../../../components/Modals/DeletePop";
import ViewContactPop from "./Component/ViewContact";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- This component includes crud of user queries for admin.
 * @returns {any}
 */

const ContactTab = () => {
  const { allContacts } = useSelector((state) => state.contactus);
  const [userAction, setUserAction] = useState({});
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

  const handleAllContacts = async () => {
    const response = await handleApiRequest(getAllContact, paginationDetails);
  };

  const handleDeleteContact = async () => {
    const response = await handleApiRequest(deleteContactus, userAction.id);
    if (response.isSuccess) {
      handleAllContacts();
    }
  };

  useEffect(() => {
    handleAllContacts();
  }, [paginationDetails]);

  // console.log("allContacts", allContacts);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Contact</h4>
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
                  type="submit"
                  className="border-0 p-0 position-absolute icn"
                  variant="transparent"
                >
                  <SearchIcon />
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="CardBody py-3">
          <div className="table-responsive py-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="">Name</th>
                  <th className="">email</th>
                  <th className="">Query</th>
                  <th className="">Status</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {allContacts.items?.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <span className="fw-sbold theme-clr">{contact.name}</span>
                    </td>
                    <td className="">{contact.email}</td>
                    <td className="">
                      <p className="m-0">{contact.message}</p>
                    </td>
                    <td className="">
                      <div className="labelWrp fw-sbold m-0 px-2 rounded-pill">
                        {contact.status}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex TableBtnWrp align-items-center gap-10">
                        <Button
                          onClick={() =>
                            setUserAction({
                              actionType: "view",
                              id: contact.id,
                            })
                          }
                          className="border-0 p-0 "
                          variant="transparent"
                        >
                          <EyeIcon />
                        </Button>
                        <Button
                          onClick={() =>
                            setUserAction({
                              actionType: "delete",
                              id: contact.id,
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
      {userAction.actionType === "view" && (
        <ViewContactPop userAction={userAction} setUserAction={setUserAction} />
      )}
      {userAction.actionType === "delete" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteContact}
        />
      )}
    </>
  );
};

export default ContactTab;
