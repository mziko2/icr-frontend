import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavBarInstance = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Auto Škola LECON</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about">O nama</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/signup">Registruj se</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/jobs">Konkursi</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/faq">FAQ</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
