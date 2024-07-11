// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarPlantiv from "./components/Navbar/Narvar.jsx";
import Home from "./views/Home/Home.jsx";
import Login from "./views/Login/Login.jsx";
import Register from "./views/Register/Register.jsx";
import Products from "./views/Products/Products.jsx";
import Profile from "./views/Profile/Profile.jsx";
import "./App.css";
import PostPlanta from "./views/PostPlanta/PostPlanta.jsx";
import Cart from "./views/Cart/Cart.jsx";
import MyPlants from "./views/Profile/MyPlants.jsx";
import Orders from "./views/Profile/Orders.jsx";

const App = () => {
  return (
    <div>
      <NavbarPlantiv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myPlants" element={<MyPlants />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/publish" element={<PostPlanta />} />
      </Routes>
    </div>
  );
};

export default App;
