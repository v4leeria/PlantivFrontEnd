import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const ButtonProducts = ({ desc, to }) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(to);
  };

  return (
    <Button variant="outline-secondary" onClick={goTo}>
      {desc}
    </Button>
  );
};
