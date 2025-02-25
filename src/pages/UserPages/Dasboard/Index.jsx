import React, { useEffect, useState } from "react";
import banner from "../../../Assets/Images/feature-banner.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../../redux/user/products/thunk";
import DeletePopup from "../../../components/Modals/DeletePop";
import moment from "moment";
import { handleApiRequest } from "../../../services/handleApiRequest";

/**
 * Description:- This is our dashboard component. Here we can perform all activities related to product like crud, script generation, video creation, template/page creation and user can check all the announcements here.
 * @returns {any}
 */

const Dashboard = () => {
  const { allProducts } = useSelector((state) => state.products);

  const [userAction, setUserAction] = useState(null);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
  });

  const handleAllProducts = async () => {
    const response = await handleApiRequest(getAllProducts, paginationDetails);
  };

  const handleDeleteProduct = async () => {
    const response = await handleApiRequest(deleteProduct, userAction.id);
    console.log("deleteProduct response", response);
    if (response.isSuccess) {
      await handleAllProducts();
    }
  };

  useEffect(() => {
    handleAllProducts();
  }, [paginationDetails]);

  // console.log("allProducts", allProducts);

  return (
    <>
      <section className="section dashboard">
        <div className="row mb-3">
          <div className="col-6">
            <img
              src={banner}
              className="img-fluid m-auto w-100"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-6">
            <img
              src={banner}
              className="img-fluid m-auto w-100"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        <div className="row m-0">
          <div className="col-sm-12 card">
            <div className="card-body p-2 ">
              <h4 className="card-title fw-bold">
                My Products
                <Link
                  to="/product/add"
                  className="btn bg-white btn-sm text-primary shadow-sm float-end border-primary"
                >
                  + New Product
                </Link>
              </h4>

              <div className="row">
                {allProducts.items?.map((product) => (
                  <div
                    key={product.id}
                    className="col-6 col-lg-4 col-xl-3"
                    data-aos="fade-in"
                  >
                    <div className="card border">
                      <div className="card-body p-2 p-md-4">
                        <h4 className="text-primary fw-bold">{product.name}</h4>
                        <small>
                          {moment(product.updatedAt).format("DD-MM-YYYY")}
                        </small>
                        <div
                          className="dropdown dropstart position-absolute pointer"
                          style={{ top: "10px", right: "10px", zIndex: "999" }}
                        >
                          <p
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="mb-0"
                          >
                            <i className="bi bi-three-dots"></i>
                          </p>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to={`/product/edit/${product.id}`}
                              >
                                Edit Product
                              </Link>
                            </li>
                            <li>
                              <p
                                className="dropdown-item text-danger mb-0"
                                onClick={() =>
                                  setUserAction({
                                    actionType: "delete",
                                    id: product.id,
                                  })
                                }
                              >
                                Delete
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row">
                          <div className="col-md-4">
                            <Link
                              to={`/script-generator/${product.id}`}
                              className="hvr-float btn-sm btn w-100 text-primary shadow-sm border-primary"
                            >
                              <i className="bi bi-chat-left-text"></i>
                              Script
                            </Link>
                          </div>
                          <div className="col-md-4">
                            <Link
                              to="/video-editor"
                              className="btn w-100 hvr-float btn-sm  text-primary shadow-sm border-primary"
                            >
                              <i className="bi bi-camera-video"></i>
                              Video
                            </Link>
                          </div>
                          <div className="col-md-4">
                            <Link
                              to="/web-builder"
                              className="btn w-100 hvr-float btn-sm  text-primary shadow-sm border-primary"
                            >
                              <i className="bi bi-window-sidebar"></i>
                              Page
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-12 card">
            <div className="card-body p-2 ">
              <h4 className="card-title fw-bold">Announcement</h4>

              <hr />
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
                <li>Cras ornare tristique elit.</li>
                <li>Vivamus vestibulum ntulla nec ante.</li>
                <li>Praesent placerat risus quis eros.</li>
                <li>Fusce pellentesque suscipit nibh.</li>
                <li>Integer vitae libero ac risus egestas placerat.</li>
                <li>Vestibulum commodo felis quis tortor.</li>
                <li>Ut aliquam sollicitudin leo.</li>
                <li>Cras iaculis ultricies nulla.</li>
                <li>Donec quis dui at dolor tempor interdum.</li>
              </ul>
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

export default Dashboard;
