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
      <DropdownToggle
        variant="light"
        id="dropdown-basic"
        style={{ borderRadius: "100%", padding: "3px" }}
        drop="start"
      >
        <i className="bi bi-person" style={{ fontSize: "1.5rem" }}></i>
      </DropdownToggle>

      <DropdownMenu>
        <LinkContainer to="/my-plants" variant="success">
          <DropdownItem>Mis Publicaciones</DropdownItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <DropdownItem>Mi Perfil</DropdownItem>
        </LinkContainer>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
