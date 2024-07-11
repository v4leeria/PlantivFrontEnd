import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserDropdown = () => {
  return (
    <Dropdown>
      <DropdownToggle variant="success" id="dropdown-basic">
        Mi Cuenta
      </DropdownToggle>

      <DropdownMenu>
        <LinkContainer to="/my-plants">
          <DropdownItem>Mis Publicaciones</DropdownItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <DropdownItem>Mi Perfil</DropdownItem>
        </LinkContainer>
        <LinkContainer to="/orders">
          <DropdownItem>Mis Ordenes</DropdownItem>
        </LinkContainer>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
