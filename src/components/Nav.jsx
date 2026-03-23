import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Nav.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${style.navbar} bg-body-tertiary custom-navbar`}
    >
      <Container fluid className="px-3 py-2">
        <Navbar.Brand href="#">MY APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
