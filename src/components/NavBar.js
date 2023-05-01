import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import ManagerNavbar from "../manager-components/ManagerNavbar";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../api";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar({ userType, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const logoutUser = () => {
    logout(setIsLoggedIn, navigate);
    toast.success("Logged out successfully");
  };

  return (
    <>
      {isLoggedIn && userType === "manager" ? (
        <ManagerNavbar logoutUser={logoutUser} setIsLoggedIn={setIsLoggedIn} />
      ) : isLoggedIn && userType != "manager" ? (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="me-auto">FYV STONE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/marbles" className="products">
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/opinion" className="opinion">
                  Opinion
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cart" className="cart">
                  Cart
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/notifications" className="notifications">
                  Notifications
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="about">
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
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
            <Navbar.Brand className="me-auto">FYV STONE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/marbles" className="products">
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/opinion" className="opinion">
                  Opinion
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="about">
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link>
                <Link to="/login" className="login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}
