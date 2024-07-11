import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDropdown from "../UserDropdown/UserDropdown";

function NavbarPlantiv() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand to="/">PLANTIV</NavbarBrand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registrarse</NavLink>

            <NavLink to="/products">Productos</NavLink>
            <NavLink to="/cart">Carrito</NavLink>
            <NavLink to="/publish">Publicar</NavLink>
            <UserDropdown />
          </Nav>
        </Container>
      </Navbar>
      ;
    </>
  );
}

export default NavbarPlantiv;
