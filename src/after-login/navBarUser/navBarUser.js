import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #5e5e5e; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: #f8670b ; }
  }
  .navbar-brand {
    margin-left: 1rem;
    font-size: 1.4em;
    color: white;
    &:hover { color: #f8670b ; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .login {
    background:blue;
  }
`;
export const NavBarUser = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/user/main">Moj raspored</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/user/onlinetests">Online testovi</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/user/main">Rezultati testova</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/user/faq">FAQ</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="collapse navbar-collapse">
      <Nav className="justify-content-end" style={{ width: "100%" }} >  
      <Nav.Item  ><Nav.Link href="/user/profile" >Profile</Nav.Link></Nav.Item>
      <Nav.Item  ><Nav.Link href="/" >Logout</Nav.Link></Nav.Item>
    </Nav>
    </Navbar.Collapse>

    </Navbar>

  </Styles>
)