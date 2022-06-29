import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ReactBootstrap.Navbar bg="primary" expand="xl">
  <ReactBootstrap.Container>
    <ReactBootstrap.Navbar.Brand href="#home">FunkoShop</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootstrap.Nav className="me-auto">
        <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="#link">Contact</ReactBootstrap.Nav.Link>
        <ReactBootstrap.NavDropdown title="More" id="basic-nav-dropdown">
          <ReactBootstrap.NavDropdown.Item href="#action/3.1">About us</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Item href="#action/3.2">Products</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
          <ReactBootstrap.NavDropdown.Divider />
          <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
        </ReactBootstrap.NavDropdown>
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar>
    </div>
  );
}

export default App;
