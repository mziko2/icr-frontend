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
export const NavBarInstance = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Početna</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about">O nama</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/signup">Registruj se</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/jobs">Konkursi</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/faq">FAQ</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>

    <Nav className="justify-content-end">  
    <Nav.Item  ><Nav.Link href="/login" >Login</Nav.Link></Nav.Item>

    </Nav>

    </Navbar>

  </Styles>
)
