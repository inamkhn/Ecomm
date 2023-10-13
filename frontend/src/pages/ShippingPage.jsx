import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { saveShippingAddress } from '../slices/cartSlice'
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingPage = () => {
   const cart = useSelector(state=>state.cart) 
   const {shippingAddress} = cart

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postal, setPostal] = useState(shippingAddress?.postal || "");
  const [country, setCountry] = useState( shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postal,country}));
    navigate("/payment")
  };

  return (
    <>
    <div>
    <CheckoutSteps step1 step2/>
    </div>
    <FormContainer>
      <ToastContainer />
      <h1 className="text-xl font-semibold text-center p-4 text-blue-500">
        Shipping Page
      </h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter PostalCode"
            name="postal code"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
        <Form.Select aria-label="Default select example" value={country} onChange={(e)=>setCountry(e.target.value)}>
          <option>Open this select menu</option>
          <option value="pakistan">Pakistan</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
        </Form.Select>
        </Form.Group>
        <Button variant="primary" className="bg-blue-500 mt-2" type="submit">
         <Link to="/payment">Submit</Link> 
        </Button>
      </Form>
    </FormContainer>

    </>  
  );
};

export default ShippingPage;
