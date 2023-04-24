import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import { logout } from "../api";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/NavBar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManagerNavbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout(setIsLoggedIn, navigate);
    toast.success("Logged out successfully");
  };

  return (
    <>
      {isLoggedIn ? (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>FYV STONE</Navbar.Brand>
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
                <Link to="/edit/:marbleId" className="opinion">
                  Edit
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
              <Nav.Link>
                <Link to="/order-details/:orderNumber" className="contact">
                  Customer Orders
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link onClick={logoutUser} className="login">
                  Logout
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>FYV STONE</Navbar.Brand>
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
                <Link to="/edit/:marbleId" className="opinion">
                  Edit
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
              <Nav.Link>
                <Link to="/order-details/:orderNumber" className="contact">
                  Customer Orders
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login" className="login">
                  Log in
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}
