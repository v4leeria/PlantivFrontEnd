// src/components/Buttons/ButtonGeneral.jsx
import React from "react";
import Button from "react-bootstrap/Button";

export const ButtonGeneral = ({ desc, onClick }) => {
  return (
    <Button
      variant="outline-secondary"
      onClick={onClick}
      style={{ margin: "2px", fontSize: "small" }}
    >
      {desc}
    </Button>
  );
};
