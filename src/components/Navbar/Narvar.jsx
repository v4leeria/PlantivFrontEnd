import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/profile">Perfil</NavLink>
            <NavLink to="/publish">Publicar</NavLink>
            <NavLink to="/myPlants">Mis plantas</NavLink>
            <NavLink to="/orders">Mis ordenes</NavLink>
          </Nav>
        </Container>
      </Navbar>
      ;
    </>
  );
}

export default NavbarPlantiv;
