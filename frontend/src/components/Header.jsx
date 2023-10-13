import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, logoutUser } from "../slices/userSlice";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch=  useDispatch()
  const logoutHandler = ()=>{
    dispatch(logoutUser())
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-slate-400">
        <Container>
          <Link to="/">
            <Navbar.Brand
              href="#home"
              className=" hover:text-amber-800 text-gray-500 text-2xl font-semibold"
            >
              UI Mart
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-20">
              <Nav.Link
                href="/cart"
                className="flex items-center space-x-2 hover:text-amber-800 text-gray-500 text-lg"
              >
                <FaShoppingCart />
                <p>
                  {cartItems.length > 0 && (
                    <Badge bg="secondary">
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                  Cart
                </p>
              </Nav.Link>
              {!user ? (
                <Nav.Link
                  href="/login"
                  className="flex items-center space-x-2 hover:text-amber-800 text-gray-500 text-lg"
                >
                  <FaUserAlt />
                  <p>User</p>
                </Nav.Link>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle  id="dropdown-basic">
                    {user.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={logoutHandler}>
                      logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
