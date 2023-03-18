import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Item() {
  const param = useParams();
  const name = param.name;
  console.log(name);
  let location = useNavigate()

  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const result = await axios.get(
      "https://raw.githubusercontent.com/DianaVasiliu/Food-API/main/db.json"
    );
    setproducts(result.data);
  };
  const clicked=()=>{
    location('/')
  }

  const getDetails=async(e)=>{
    console.log(e);
    e.num='1'
    console.log(e);

    const result = await axios.post('http://localhost:8000/add-to-cart',e)
    console.log(result);

  }

  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand onClick={()=>clicked()} style={{cursor:"pointer"}} >
              <img
                alt=""
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/270e6774125221.5c2339a80ff40.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Italian Pizza Resto
            </Navbar.Brand>
            <Link to={'/cart'}><button className="btn btn-secondary"> <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart</button></Link >
          </Container>
        </Navbar>
      </div>
      <div className="container m-4 text-center">
        <h2>Varieties in hand</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vel, aut a dolorem magni itaque sunt rem, maxime, id sequi suscipit nesciunt mollitia earum tenetur.</p>
      </div>
      <div className="container m-4 text-center">
        {products[name]
          ? products[name].map((item) => (
              <Card className="m-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" height='200px' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={(e)=>getDetails(item)} >Add to cart</Button>
                </Card.Body>
              </Card>
            ))
          : ""}
          <br />
                    <Link to={"/products"}>
              <button className="btn btn-secondary mt-5">
                {" "}
                <i class="fa-solid fa-arrow-left"></i> &nbsp; Back
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Item;
