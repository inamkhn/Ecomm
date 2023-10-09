import React, { useEffect, useState } from "react";
import Products from '../Products'
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
// import { useGetProductsQuery } from "../slices/productApiSlice";
// import { useGetAllProductsQuery } from "../slices/apiSlice";


const HomePage = () => {

  //  const { data:Products, isLoading, error } = useGetAllProductsQuery();
  //  console.log(Product)

    const [Products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
      const fetchdata = async()=>{
        const {data} = await axios.get("http://localhost:5000/api/v1/getallproducts")
        setProducts(data)
        console.log(data)
      }
      fetchdata()
    },[])
  
  return (
    <>
      <Container className="py-6 ">
        <Row>
          {Products.map((item) => {
            return (
              <>
                <Col sm={12} md={6} lg={4} xl={3} className="p-3">
                  <Product key={item._id} Product={item} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
