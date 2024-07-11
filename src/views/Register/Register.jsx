// src/pages/Register.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext.jsx";
import api from "../../config/configAxios.jsx";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    comuna: "",
    region: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  //Esta funcion se ejecuta cada vez que se haga un cambio en el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", form);
      await login(form.email, form.password); // Log in the user after successful registration
      navigate("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Error en el registro. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Comuna</label>
          <input
            type="text"
            name="comuna"
            value={form.comuna}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Región</label>
          <input
            type="text"
            name="region"
            value={form.region}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
