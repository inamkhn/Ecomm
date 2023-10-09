import React from "react";
import { Badge, Button, Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import { FaShoppingCart,FaUserAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Header = () => {

   const {cartItems} =  useSelector(state=>state.cart)

  return (
    <div>
      <Navbar expand="lg" className="bg-slate-400">
      <Container>
        <Navbar.Brand href="#home" className=" hover:text-amber-800 text-gray-500 text-2xl font-semibold">UI Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-20">
            <Nav.Link href="#home" className="flex items-center space-x-2 hover:text-amber-800 text-gray-500 text-lg"><FaShoppingCart/><p>
            {
              cartItems.length > 0 && (
                <Badge bg="secondary">{cartItems.reduce((a,c)=>a + c.qty,0)}</Badge>
              )
            }Cart</p></Nav.Link>
            <Nav.Link href="#link" className="flex items-center space-x-2 hover:text-amber-800 text-gray-500 text-lg"><FaUserAlt/><p>User</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
