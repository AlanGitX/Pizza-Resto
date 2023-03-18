import React ,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Main.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Main() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="navbar-main">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              {" "}
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/270e6774125221.5c2339a80ff40.jpg"
                height={"50px"}
                alt="logo"
              />{" "}
              &nbsp; Italian Pizza Resto
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-5 component ">
                <Nav.Link>
                  <button className="btn btn-primary" variant="primary" onClick={handleShow}> <i class="fa-solid fa-phone me-2"></i> Contact us</button>
                </Nav.Link>
                <Nav.Link>
                  <button className="btn btn-danger"> <i class="fa-solid fa-right-to-bracket me-2"></i>Employee Login</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="image">
        <div className="pic">
          <img
            src="https://img.freepik.com/free-photo/traditional-supreme-pizza-isolated-white-background_123827-20129.jpg?w=1060&t=st=1678696339~exp=1678696939~hmac=fac5c287b0377128c91219385eaf8ec9aac5c25126b8d2a9d4c4cde4d858758b"
            alt="pizza"
          />
        </div>
        <div className="text animate__animated animate__headShake"><h3>Welcome to </h3>
        <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/270e6774125221.5c2339a80ff40.jpg"
                alt="logo"
              />
              <br />
        <Link to='/products'><button className="btn btn-primary"> <i class="fa-solid fa-couch me-2"></i>Dine in</button></Link >
        <Link to='/products'><button className="btn btn-primary m-3"> <i class="fa-solid fa-car me-2"></i>Take Out</button></Link >
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <h3> General enquiries</h3>
<p>T 020 3878 3955</p>
<p>hello@demos.co.uk</p>

<h3>Media enquiries</h3>
<p>
  Felix Arbenz-Caines – press@demos.co.uk

</p>  <p>
  T 020 3878 3955

</p>  
<h3>
  Event enquiries

</h3><p>h3 Sumaya Akthar – toby.obrien@demos.co.uk</p>
<p>
  T 020 3878 3955

</p>  
<h3>
  Party Conference enquiries

</h3> <p>Nick Tyrone – maeve.thompson@demos.co.uk</p>
<p>T 020 3878 3955</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Main;
