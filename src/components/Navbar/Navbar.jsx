import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDropdown from "../UserDropdown/UserDropdown";
import "./Navbar.css";

function NavbarPlantiv() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container className="containerNavbar">
        <Navbar.Brand as={NavLink} to="/" style={{ color: "black" }}>
          PLANTIV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav">
            <NavLink className="navlinkNavbar" to="/login">
              Login
            </NavLink>
            <NavLink className="navlinkNavbar" to="/register">
              Registrarse
            </NavLink>
            <NavLink className="navlinkNavbar" to="/products">
              Productos
            </NavLink>
            <NavLink className="navlinkNavbar" to="/cart">
              Carrito
            </NavLink>
            <NavLink className="navlinkNavbar" to="/publish">
              Publicar
            </NavLink>
            <UserDropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPlantiv;
