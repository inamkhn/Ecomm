import React, { useEffect, useState } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
// import Products from "../Products";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";


const ProductPage = () => {
  const { id: productId } = useParams();
  const [Product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);

  const dispatch =  useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/getproduct/${productId}`
      );
      setProduct(data);
      console.log(data);
    };
    fetch();
  }, []);

  const addCartHandler = ()=>{
      dispatch(addToCart({...Product,qty}))
      navigate('/cart')
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="mt-3">
          <img src={Product.image} alt="" width={300} className="ml-24" />
        </Col>
        <Col md={3} className="mt-3">
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="text-xl font-semibold">
              {Product.name}
            </ListGroup.Item>
            <ListGroup.Item as="li" className="flex space-x-1 items-center">
              <Rating
                value={Product.rating}
                review={`${Product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item as="li">Price {Product.price}</ListGroup.Item>
            <ListGroup.Item as="li">
              Description {Product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="mt-3">
          <ListGroup>
            <ListGroup.Item>Price {Product.price}</ListGroup.Item>
            <ListGroup.Item>
              Status: {Product.countInStock} InStock
            </ListGroup.Item>

            {Product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty : </Col>
                  <Col>
                    <Form>
                      <Form.Select aria-label="Default select example" value={qty} onChange={(e)=>setQty(e.target.value)}>
                      {
                        [...Array(Product.countInStock).keys()].map((x)=>
                          <option key={x+1} value={x+1}>{x+1}</option>
                        )
                      }
                        
                      </Form.Select>
                    </Form>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <button onClick={addCartHandler} className="px-3 py-1 text-white bg-blue-500 rounded-md">
                Cart
              </button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
