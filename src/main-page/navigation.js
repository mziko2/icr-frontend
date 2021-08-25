import { Nav, Navbar } from 'rsuite';


const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Header>
          AutoŠkola LECON
        </Navbar.Header>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1" >Početna</Nav.Item>
            <Nav.Item eventKey="2">O nama</Nav.Item>
            <Nav.Item eventKey="3">Registruj se</Nav.Item>
            <Nav.Item eventKey="4">Konkursi</Nav.Item>
            <Nav.Item eventKey="5">FAQ</Nav.Item>
          </Nav>
          
        </Navbar.Body>
      </Navbar>
    );
  };

export default NavBarInstance;