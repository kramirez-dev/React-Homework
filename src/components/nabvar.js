import React from 'react'
import { Nav, Navbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/">The Meal DB</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Categories</Link></Nav.Link>
      <Nav.Link><Link to="/random">Random Meal</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbar1