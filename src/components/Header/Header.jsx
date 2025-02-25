import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// img
import Logo from "../../Assets/Images/logo.png";
import TryABCAiButton from "../tyrABCButton";

const Header = () => {
  const { loggedinUser } = useSelector((state) => state.auth);

  return (
    <>
      <header className="siteHeader py-2 sticky-top">
        <Navbar expand="lg" className="">
          <Container>
            <Nav.Link to="/home">
              <img
                src={Logo}
                alt=""
                style={{ height: 40 }}
                className="img-fluid"
              />
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center ">
                <NavLink to="/pricing" className={"px-2 px-lg-3 navLink"}>
                  Pricing
                </NavLink>
                <NavLink to="/reviews" className={"px-2 px-lg-3 navLink"}>
                  Reviews
                </NavLink>
                <NavLink to="/pricing" className={"px-2 px-lg-3 navLink"}>
                  <TryABCAiButton />
                </NavLink>
                {loggedinUser.data?.token ? (
                  <NavLink to="/dashboard" className={"px-2 px-lg-3 navLink"}>
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink to="/login" className={"px-2 px-lg-3 navLink"}>
                    Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
