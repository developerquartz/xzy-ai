import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AddEditScriptPop from "./Component/Modal/AddEditScriptPop";

const TokenTab = () => {
  const [addEditScript, setAddEditScript] = useState("");

  const handleAddEditScript = () => {
    setAddEditScript(!addEditScript);
  };
  return (
    <>
      <AddEditScriptPop
        addEditScript={addEditScript}
        setAddEditScript={setAddEditScript}
      />
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Token</h4>
            <Form>
              <div className="searchForm position-relative iconWithText">
                <input
                  type="text"
                  placeholder="search"
                  className="form-control"
                />
                <Button
                  className="border-0 p-0 position-absolute icn"
                  variant="transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                      stroke="#031D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
                  <th className="">Title</th>
                  <th className="">AVE input token</th>
                  <th className="">AVE output token</th>
                  <th className="">abc count</th>
                  <th className="">AVE cost</th>
                  <th className="">GPT version</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="fw-sbold theme-clr">default prompt</span>
                  </td>
                  <td>2204.8</td>
                  <td>786.7</td>
                  <td>434</td>
                  <td>0.17</td>
                  <td>gpt-4-32k</td>
                  <td>
                    <div className="d-flex TableBtnWrp align-items-center gap-10">
                      <Button
                        onClick={handleAddEditScript}
                        className="border-0 p-0 "
                        variant="transparent"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 21V16.75L16.2 3.575C16.4 3.39167 16.621 3.25 16.863 3.15C17.105 3.05 17.359 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.771 5.4 20.863 5.65C20.955 5.9 21.0007 6.15 21 6.4C21 6.66667 20.954 6.921 20.862 7.163C20.77 7.405 20.6243 7.62567 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z"
                            fill="#2C2C2C"
                          />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenTab;
