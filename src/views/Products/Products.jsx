// src/pages/Products.js
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext.jsx";

const Products = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Debes iniciar sesión para ver los productos.</div>;
  }

  // Aquí podrías hacer una llamada a la API para obtener los productos del usuario

  return (
    <div>
      <h1>Mis Productos</h1>
      <p>Aquí se mostrarán los productos del usuario</p>
    </div>
  );
};

export default Products;
