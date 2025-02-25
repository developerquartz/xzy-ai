import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// images
import { ReactComponent as GearIcon } from "../../Assets/icons/gear.svg";
import logo from "../../Assets/Images/logo.png";
import { logoutUser } from "../../redux/auth/slice";
import { getUserProfile } from "../../redux/profile/thunk";
import { authUsers, errorMsg } from "../../utils";
import { getAllProducts } from "../../redux/user/products/thunk";
import { handleApiRequest } from "../../services/handleApiRequest";
import { logData } from "../../services/logService";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedinUser } = useSelector((state) => state.auth);
  const { userProfile } = useSelector((state) => state.profile);
  const { allProducts } = useSelector((state) => state.products);
  const [paginationDetails, setPaginationDetails] = useState({
    page: 1,
    limit: 10,
  });

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      console.log("Manish Mittal");
      navigate("/login");
    } catch (error) {
      errorMsg(error.message);
    }
  };

  const handleAllProducts = async () => {
    const response = await handleApiRequest(getAllProducts, paginationDetails);
  };

  useEffect(() => {
    (async () => {
      if (loggedinUser.data) {
        const response = await handleApiRequest(
          getUserProfile,
          loggedinUser.data.id,
          false
        );
      }
    })();
  }, [loggedinUser]);

  useEffect(() => {
    handleAllProducts();
  }, [paginationDetails]);

  // console.log("allProducts", allProducts);
  // console.log("loggedinUser", loggedinUser);
  // logData("userProfile", userProfile);

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/home" className="logo d-flex align-items-center">
            <img
              src={logo}
              //   classNameName="img-fluid"
              alt=""
              style={{ maxHeight: "35px" }}
            />
          </Link>
          {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
        </div>

        {/* <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div> */}
        <nav className="header-nav me-auto ps-3">
          <ul className="d-flex align-items-center">
            <li className="nav-item  pe-3">
              <select className="form form-select ">
                {allProducts.items?.map((product) => (
                  <option key={product.id}>{product.name}</option>
                ))}
              </select>
            </li>

            <li
              className={
                location.pathname === "/my-script"
                  ? "nav-item me-3 btn-primary p-2 rounded"
                  : "nav-item me-3"
              }
            >
              <NavLink
                className="nav-link d-flex align-items-center pe-0 "
                to="/my-script"
              >
                <span className="">My Scripts</span>
              </NavLink>
            </li>

            <li
              className={
                location.pathname === "/my-videos"
                  ? "nav-item me-3 btn-primary p-2 rounded"
                  : "nav-item me-3"
              }
            >
              <NavLink
                className="nav-link d-flex align-items-center pe-0 "
                to="/my-videos"
              >
                <span className="">My Videos</span>
              </NavLink>
            </li>

            <li
              className={
                location.pathname === "/my-pages"
                  ? "nav-item me-3 btn-primary p-2 rounded"
                  : "nav-item me-3"
              }
            >
              <NavLink
                className="nav-link d-flex align-items-center pe-0 "
                to="/my-pages"
              >
                <span className="">My Pages</span>
              </NavLink>
            </li>
            {(userProfile.data?.role === authUsers[1] ||
              userProfile.data?.role === authUsers[2]) && (
              <li
                className={
                  location.pathname === "/admin"
                    ? "nav-item me-3 btn-primary p-2 rounded"
                    : "nav-item me-3"
                }
              >
                <NavLink
                  className="nav-link d-flex align-items-center pe-0 "
                  to="/admin"
                >
                  <span className="">Admin Dashboard</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item pe-3">
              <a
                href="https://refer.abc.ai/?grsf_email=kszai93@gmail.com"
                className="btn btn-primary btn-sm hvr-grow"
              >
                <i className="bi bi-stars"></i> Get Free Credits
              </a>
            </li>
            <li className="nav-item pe-3">
              <p className="border-primary rounded bg-primary-light btn btn-sm text-primary ms-2 hvr-float mb-0">
                <b>
                  <i className="bi bi-coin"></i>{" "}
                  {loggedinUser.data?.credits || 0} Credit(s)
                </b>
              </p>
            </li>

            <li className="nav-item dropdown pe-3">
              <p
                className="nav-link nav-profile d-flex align-items-center pe-0 mb-0 pointer"
                data-bs-toggle="dropdown"
              >
                <i className="bi-person-circle"></i>
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {userProfile.data?.name || userProfile.data?.email}
                </span>
              </p>
              {/* <NavDropdown
                id="nav-dropdown-dark-example"
                title={userProfile.data?.name || userProfile.data?.email}
                className="nav-link nav-profile d-flex align-items-center pe-0"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/settings");
                  }}
                >
                  Settings
                </NavDropdown.Item>
              </NavDropdown> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{userProfile.data?.name}</h6>
                  <span>{userProfile.data?.email}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item ">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to={
                      userProfile.data?.userSubscriptions?.length > 0
                        ? "/"
                        : "/pricing"
                    }
                  >
                    <i className="bi bi-check-circle"></i>
                    <span>Subscription</span>
                    <span className="badge bg-primary rounded-pill ms-2">
                      {userProfile.data?.userSubscriptions?.length > 0
                        ? "Active"
                        : "Activate"}
                    </span>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="settings"
                  >
                    {/* <i className="bi bi-check-circle"></i> */}
                    <GearIcon className="myIcon" />
                    <span>Settings</span>
                  </Link>
                </li>

                {/* <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="profile.php"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li> */}

                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/contact"
                  >
                    <i className="bi bi-headset"></i>
                    <span>Contact Us</span>
                  </Link>
                </li>
                {/* <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="https://docs.abc.ai/"
                  >
                    <i className="bi bi-journal-bookmark"></i>
                    <span>Knowledge Base</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="https://www.facebook.com/groups/abcai"
                  >
                    <i className="bi bi-facebook"></i>
                    <span>Facebook Group</span>
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="https://www.abc.ai/privacy-policy"
                  >
                    <i className="bi bi-card-text"></i>
                    <span>Privacy Policy</span>
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="https://www.abc.ai/terms-of-use"
                  >
                    <i className="bi bi-card-checklist"></i>
                    <span>User Agreement</span>
                  </a>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p
                    className="dropdown-item d-flex align-items-center mb-0 pointer"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
