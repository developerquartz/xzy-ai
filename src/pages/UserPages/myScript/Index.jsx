import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { ReactComponent as EditIcon } from "../../../Assets/icons/edit.svg";
import {
  deleteProduct,
  getAllProducts,
} from "../../../redux/user/products/thunk";
import DeletePopup from "../../../components/Modals/DeletePop";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { logData } from "../../../services/logService";

/**
 * Description:- This is products component. Product crud is implemented here .
 * @returns {any}
 */

const MyScript = () => {
  const navigate = useNavigate();
  const { allProducts } = useSelector((state) => state.products);

  const [userAction, setUserAction] = useState(null);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
    serach: "",
  });

  const handleAllProducts = async () => {
    const response = await handleApiRequest(getAllProducts, paginationDetails);
    // console.log("getAllFaqs response", response);
  };

  const handleDeleteProduct = async () => {
    const response = await handleApiRequest(deleteProduct, userAction.id);
    console.log("delete faq  response", response);
    if (response.isSuccess) {
      await handleAllProducts();
    }
  };

  useEffect(() => {
    handleAllProducts();
  }, [paginationDetails]);

  // logData("allProducts", allProducts);

  return (
    <>
      <section className="section">
        <div className="col-12" data-aos="fade-up">
          <div className="card" style={{ minHeight: "80vh" }}>
            <div className="card-body">
              <h4 className="fw-bold card-title">
                <i className="bi bi-chat-text-left" />
                Scripts
              </h4>
              <div className="row">
                <div className="col-12 col-lg-3 aos-init aos-animate">
                  <div
                    className="card border-primary h-100 pointer"
                    onClick={() => navigate("/product/add")}
                  >
                    <div className="card-body text-center">
                      <div className="row h-100">
                        <div className="my-auto">
                          <i className="text-muted bi bi-plus fs-1" />
                          <p className="text-muted">Add New Script</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {allProducts.items?.map((product) => (
                  <div
                    key={product.id}
                    className="col-12 col-lg-3 aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="card  h-100">
                      <div
                        className="card-header bg-primary text-white"
                        style={{ minHeight: 90 }}
                      >
                        <h5 className="fw-bold ">
                          <i
                            className="bi bi-card-text"
                            style={{
                              fontSize: 75,
                              position: "absolute",
                              right: 10,
                              top: 0,
                              opacity: "0.3",
                            }}
                          />
                          {product.name}
                        </h5>
                        <span className="text-primary border-primary badge bg-white">
                          ABC Script
                        </span>
                      </div>
                      <div className="card-body p-3">
                        <p style={{ fontSize: 14 }}>
                          Selection:{" "}
                          <span className="text-primary">
                            $18M Big Fat Rip Off
                          </span>
                          <br />
                          Date Created:{" "}
                          <span className="text-muted">
                            {moment(product.createdAt).format("YYYY-MM-DD")}
                          </span>
                          <br />
                          Last Edit:{" "}
                          <span className="text-muted">
                            {moment(product.updatedAt).format("YYYY-MM-DD")}
                          </span>
                        </p>
                        <div className="d-flex justify-content-between">
                          <Link
                            to={`/script-generator/${product.id}`}
                            className="btn btn-sm text-primary shadow-sm border-primary"
                          >
                            <i className="bi bi-pencil-square" /> Open
                          </Link>
                          <div>
                            <p
                              className="btn btn-sm border-dark text-danger mb-0 me-2"
                              onClick={() => {
                                navigate(`/product/edit/${product.id}`);
                              }}
                            >
                              <EditIcon />
                            </p>
                            <p
                              className="btn btn-sm border-danger text-danger mb-0"
                              onClick={() => {
                                setUserAction({
                                  actionType: "delete",
                                  id: product.id,
                                });
                              }}
                            >
                              <i className="bi bi-trash" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {userAction?.actionType === "delete" && (
        <DeletePopup
          userAction={userAction}
          setUserAction={setUserAction}
          onDelete={handleDeleteProduct}
        />
      )}
    </>
  );
};

export default MyScript;
