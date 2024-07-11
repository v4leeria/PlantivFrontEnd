import React from "react";
import ButtonProducts from "../../components/Buttons/ButtonProducts.jsx";

const Home = () => {
  return (
    <div>
      <h1>¡Bienvenido al mundo de las plantas!</h1>
      <ButtonProducts to="/products">Ver Productos</ButtonProducts>
    </div>
  );
};

export default Home;
