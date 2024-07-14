// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarPlantiv from "./components/Navbar/Navbar.jsx";
import Home from "./views/Home/Home.jsx";
import Login from "./views/Login/Login.jsx";
import Register from "./views/Register/Register.jsx";
import Products from "./views/Products/Products.jsx";
import Profile from "./views/Profile/Profile.jsx";
import Cart from "./views/Cart/Cart.jsx";
import MyPlants from "./views/Profile/MyPlants.jsx";
import Publish from "./views/Publish/Publish.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div className="app-container">
      <NavbarPlantiv />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-plants" element={<MyPlants />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
