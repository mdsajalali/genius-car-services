import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={"30"} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Mechince" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mechince 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Mechince 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mechince 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Mechince 4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            {/* <Nav.Link className="text-danger" as={Link} to="/home">
              {user.displayName}
            </Nav.Link> */}
            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
