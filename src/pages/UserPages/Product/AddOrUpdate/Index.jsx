import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logobody from "../../../../Assets/Images/logo-body.png";
import {
  createProduct,
  getProductDetails,
  updateProductDetails,
} from "../../../../redux/user/products/thunk";
import { handleApiRequest } from "../../../../services/handleApiRequest";
import { errorMsg } from "../../../../utils";

/**
 * Description:- This is where we can add a new product and edit previously added product.
 * @returns {any}
 */

const AddOrUpdateProduct = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { productDetails } = useSelector((state) => state.products);
  const [newProductDetails, setNewProductDetails] = useState({});

  const handleChange = (e) => {
    setNewProductDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleProductDetails = async () => {
    const response = await handleApiRequest(getProductDetails, id);
  };

  const handleCreateOrUpdateProduct = async (e) => {
    e.preventDefault();
    if (
      !newProductDetails.name?.trim() ||
      !newProductDetails.description?.trim()
    ) {
      return errorMsg("Please enter product details");
    }

    let response = {};
    if (path === "add") {
      response = await handleApiRequest(createProduct, newProductDetails);
    } else {
      response = await handleApiRequest(
        updateProductDetails,
        newProductDetails
      );
    }
    if (response.isSuccess) {
      setNewProductDetails({});
      navigate(-1);
    }
  };

  useEffect(() => {
    if (id) {
      handleProductDetails();
    }
  }, [id]);

  useEffect(() => {
    if (id && productDetails.data) {
      setNewProductDetails(productDetails.data);
    }
  }, [productDetails]);

  console.log("productDetails", productDetails);
  console.log("newProductDetails", newProductDetails);
  console.log("pathname", pathname, path);
  console.log("params", params);

  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold text-center">
                  <img
                    src={logobody}
                    className="me-3"
                    style={{ width: "25px" }}
                  />
                  {path === "add" ? "Add New Product" : "Edit Product"}
                </h5>

                <form
                  className="row g-3"
                  onSubmit={handleCreateOrUpdateProduct}
                >
                  <div className="col-12">
                    <label for="inputNanme4" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter product name"
                      name="name"
                      value={newProductDetails.name || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputNanme4" className="form-label">
                      Product Description
                    </label>
                    <textarea
                      className="form-control"
                      style={{ height: "200px" }}
                      placeholder="Write a few paragraphs about your product. Tells us about the specific ingredients, features, benefits, and who it is for. (Feel free to copy/paste from your sales page)"
                      name="description"
                      value={newProductDetails.description || ""}
                      onChange={handleChange}
                    >
                      Pure H2O water in elegant packaging
                    </textarea>
                  </div>
                  {/* <div className="col-12">
                    <label for="inputNanme4" className="form-label">
                      Product Testimonials
                    </label>
                    <textarea
                      className="form-control"
                      style={{ height: "200px" }}
                      placeholder="Copy paste some testimonials of your product"
                    >
                      Customer A say "It's the purest water I've ever had"
                    </textarea>
                  </div> */}

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddOrUpdateProduct;
