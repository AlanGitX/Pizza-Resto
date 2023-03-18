import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link,useNavigate } from "react-router-dom";

function Products() {
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
  console.log(products);

  const productClick = (item)=>{
    console.log(item);
  }

  let location = useNavigate()


  const clicked=()=>{
    location('/')
  }

  return (
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


      <div className="container text-center mt-5">
        <h2>Pick the food of your choice!!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam
          veniam aliquam neque veritatis vitae asperiores, nihil sed, ullam,
          repellendus porro saepe? Blanditiis, ea molestias.
        </p>
      </div>
      {products ? (
        <div className="container text-center">
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/front-view-delicious-cake-concept_23-2148769309.jpg?w=1380&t=st=1678810614~exp=1678811214~hmac=ca216ad5e9f3e5a3b268132502acc2c5e3579bc75adfea30f8d5808023bb02da"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dessert</h5>
              <p class="card-text">
                The collection of all the best desserts in our menu.
              </p>
              <Link to={'/item/dessert'}><button className="btn btn-primary" onClick={()=>productClick(products.dessert)}>click for more details</button></Link >
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/iced-tea-with-lime-ice_114579-7142.jpg?w=1380&t=st=1678810683~exp=1678811283~hmac=78bd986b21983585bcb56cf825802a235a07c20ef7f87fc45b9a1b20429b3b28"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Drinks</h5>
              <p class="card-text">
              The collection of all the best drinks in our menu.
              </p>
              <Link to={'/item/drinks'}><button className="btn btn-primary" onClick={()=>productClick(products.drinks)}>click for more details</button></Link>
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/creamy-penne-pasta-white-bowl_114579-83032.jpg?w=1380&t=st=1678810729~exp=1678811329~hmac=7c35cd8901a18afa54794837396ea5f9418de649403e853a4f05fb70cf309729"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pasta</h5>
              <p class="card-text">
              The collection of all the best pasta in our menu.
              </p>
              <Link to={'/item/pasta'}><button className="btn btn-primary" onClick={()=>productClick(products.pasta)}>click for more details</button></Link>
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1380&t=st=1678814374~exp=1678814974~hmac=1e2fcc11324e7f4c07cb779f0ef8e16736595660c0b0a18cdb61bbc3d3055996"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pizza</h5>
              <p class="card-text">
              The collection of all the best Pizza in our menu.
              </p>
              <Link to={'/item/pizza'} ><button className="btn btn-primary" onClick={()=>productClick(products.pizza)}>click for more details</button></Link >
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/top-view-delicious-vegetable-salad-sliced-food-with-fresh-ingredients-dark-background-salad-meal-snack-lunch-food-color_140725-96830.jpg?w=1380&t=st=1678810896~exp=1678811496~hmac=990d3b4ebfb4fec656d240b225054f9348f26e391d8776edc6de76a9aa50e71d"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Salad</h5>
              <p class="card-text">
              The collection of all the best salads in our menu.
              </p>
              <Link to={'/item/salads'}><button className="btn btn-primary" onClick={()=>productClick(products.salads)}>click for more details</button></Link >
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/homemade-ketchup-mustard-mayonnaise-sauce-ingredients-dark-top-view_114579-4970.jpg?w=1380&t=st=1678810935~exp=1678811535~hmac=6992bccfc9599cf05569a393431bc930cc90a4db4e554d74f447d939fb828b46"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Sauces</h5>
              <p class="card-text">
              The collection of all the best sauces in our menu.
              </p>
              <Link to={'/item/sauces'}><button className="btn btn-primary" onClick={()=>productClick(products.sauces)} >click for more details</button></Link>
            </div>
          </div>
          <div class="card m-5" style={{ width: "18rem" }}>
            <img
              src="https://img.freepik.com/free-photo/fast-food-dish-yellow-background-fast-food-set-fried-chicken-french-fries-take-away-fast-food-top-view-copy-space-still-life-flat-lay_639032-2414.jpg?w=1380&t=st=1678814135~exp=1678814735~hmac=b85a9b2dc100f99f9a94135f7c6d32d0ae269dcd123d64a3e21b8902fd005ba7"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Sides</h5>
              <p class="card-text">
              The collection of all the best sides in our menu.
              </p>
              <Link to={'/item/sides'}><button className="btn btn-primary" onClick={()=>productClick(products.sides)}>click for more details</button></Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Products;
