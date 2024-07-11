import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { LinkContainer } from "react-router-bootstrap";

const userDropdown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Mi Cuenta">
      <LinkContainer to="/my-posts">
        <Dropdown.Item>Mis Publicaciones</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/profile">
        <Dropdown.Item>Mi Perfil</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to="/orders">
        <Dropdown.Item>Mis Ordenes</Dropdown.Item>
      </LinkContainer>
    </DropdownButton>
  );
};

export default userDropdown;
