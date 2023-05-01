import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/NavBar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManagerNavbar({ logoutUser }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="me-auto">FYV STONE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/manager/home-page" className="home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/managment" className="products">
                Managment
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/add-new-marble" className="cart">
                Add Marble
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/orders" className="notifications">
                Orders
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link onClick={logoutUser} className="login">
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
