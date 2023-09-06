import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "../Button/HeaderCartButton";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <Navbar
        className="bg-body-tertiary py-1"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container>
          <Nav className="mx-auto responsive">
            <Link
              style={{ color: "white" }}
              to="/home"
              className="px-5 text-decoration-none"
            >
              HOME
            </Link>
            <Link
              style={{ color: "white" }}
              to="/store"
              className="px-5 text-decoration-none"
            >
              STORE
            </Link>
            <Link
              style={{ color: "white" }}
              to="/about"
              className="px-5 text-decoration-none"
            >
              ABOUT
            </Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart} />
        </Container>
      </Navbar>
      <h2 className="head">The Generics</h2>
    </React.Fragment>
  );
};

export default Header;
