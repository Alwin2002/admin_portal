import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">      
        <Navbar.Brand href="#home">&nbsp;&nbsp;&nbsp;Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Container>
          <Nav className="me-auto justify-content-center">
          <Form className="d-flex">
            <Form.Control
            style={{ width: '500px' }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              size="60"/>
            <Button variant="outline-light">Search</Button>
          </Form>
          </Nav>
          </Container>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
