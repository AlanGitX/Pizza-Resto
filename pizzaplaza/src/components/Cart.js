import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Cart() {
  let location = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const [count, setCount] = useState(0);
  const [cart, SetCart] = useState([]);
  const [cart2, SetCart2] = useState([]);

  const [costMain, setCost] = useState(0);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/get-cart-items");
    SetCart(result.data.items);
    setCost(0);

    totalcost();
  };
  console.log(cart);

  const inputincdata = async (e) => {
    console.log(e);
    const res = await axios.post("http://localhost:8000/increase-cart", e);
    console.log(res);
    fetchData();
  };

  const inputdecdata = async (e) => {
    console.log(e);
    const res = await axios.post("http://localhost:8000/decrease-cart", e);
    console.log(res.data.num);
    if (res.data.num == 0) {
      deleteCart(res.data.name);
    }

    fetchData();
  };
  const deleteCart = async (name) => {
    const result = await axios.delete(
      "http://localhost:8000/delete-employee/" + name
    );
    console.log(result);
    fetchData();
  };
  const clicked = () => {
    location("/");
  };

  const totalcost = async () => {
    const result = await axios.get("http://localhost:8000/get-cart-items");
    console.log(result.data.items);
    SetCart2(result.data.items);
    console.log(cart2);
    let cost = 0;
    {
      setCost(0);
      if (result) {
        result.data.items.map((itemno) => {
          cost = cost + itemno.price * itemno.num;
          console.log(cost);
        });
      }
    }
    setCost(cost);
  };
  console.log(costMain);
  const paymentevent = () => {
    setCount(2);
    setTimeout(() => {
      setCount(3);
    }, 2000);
  };

 const deleteCartElements = async() =>{
  const result = await axios.delete(
    "http://localhost:8000/delete-all"
  )
  console.log(result)
 }

  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand
              onClick={() => clicked()}
              style={{ cursor: "pointer" }}
            >
              <img
                alt=""
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/270e6774125221.5c2339a80ff40.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Italian Pizza Resto
            </Navbar.Brand>
            <Link to={"/products"}>
              <button className="btn btn-secondary">
                {" "}
                <i class="fa-solid fa-arrow-left"></i> &nbsp; Back
              </button>
            </Link>
          </Container>
        </Navbar>
      </div>
      <div className="container mt-5">
        <div>
          <h1>Your Cart</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa impedit consectetur soluta at molestiae? Labore quod, eos
            reiciendis corporis laudantium aperiam, recusandae necessitatibus
            autem dolor deleniti repellendus minus dolore!
          </p>{" "}
        </div>
        <div>
          <div>
            <div>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Number</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {cart
                    ? cart.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            <button
                              className=" btn-secondary rounded-circle"
                              onClick={(e) => inputincdata(item)}
                            >
                              <i class="fa-solid fa-plus"></i>
                            </button>{" "}
                            <input
                              className="inputclass"
                              type="text"
                              value={item.num}
                            />
                            <button
                              onClick={(e) => inputdecdata(item)}
                              className=" btn-secondary rounded-circle"
                            >
                              <i class="fa-solid fa-minus"></i>
                            </button>{" "}
                          </td>
                          <td>${item.price * item.num}</td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

{ costMain!=0?     <div className="container m-5 text-center">
        <h2>Total Cost</h2>
        <h3>{costMain}</h3>
        {count == 0 ? (
          <button className="btn btn-secondary" onClick={() => paymentevent()}>
            Click to confirm{" "}
          </button>
        ) : (
          ""
        )}
        {count == 2 ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <br />
          </Button>
        ) : (
          ""
        )}
        {count == 3 ? (
          <>
            <img
              src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
              alt=""
            />
            <br />
            <Link to={"/products"}>
              <button className="btn btn-secondary" onClick={()=>deleteCartElements()}>
                {" "}
                <i class="fa-solid fa-arrow-left"></i> &nbsp; Back
              </button>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>:''}
    </div>
  );
}

export default Cart;
