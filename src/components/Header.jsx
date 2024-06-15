import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import photo from './logo.png';
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}>
        <Navbar.Brand>
          
          <img src={photo} alt="logo" style={{ width: '50px', cursor: 'pointer' }} />
          </Navbar.Brand>
        </Link>
        {/* <Navbar.Brand as={Link} to={"/"}>eCom</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/product/add">Add Product</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as={Link} to={"/signup"}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
