import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { House, PersonCircle, Heart, BoxArrowInRight } from "react-bootstrap-icons";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          🎬 Movies Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><House className="me-1" />Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>

            <NavDropdown title={<><PersonCircle className="me-1" />Accounts</>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#profiles">Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#build">Build Account</NavDropdown.Item>
              <NavDropdown.Item href="#change">Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Quick search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="ms-3">
            <Nav.Link href="#favourites"><Heart /></Nav.Link>
            <Nav.Link href="#login"><BoxArrowInRight /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
