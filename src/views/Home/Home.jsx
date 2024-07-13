import React from "react";
import { ButtonProducts } from "../../components/Buttons/ButtonProducts.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <h1>¡Bienvenido al mundo de las plantas!</h1>
      </div>
      <br />
      <ButtonProducts desc={"Ver productos"} to="/products" />
    </div>
  );
};

export default Home;
