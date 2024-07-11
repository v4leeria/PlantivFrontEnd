// src/pages/Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Espera a que email y password sean correctos
      await login(email, password);
      navigate("/"); // Redirige al usuario a la página de inicio después de iniciar sesión
    } catch (error) {
      //Se declara un error en la consola y aparece un alert para el usuario
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
    }
  };

  //Cuerpo del formulario
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            //email cambia al valor que escribe el usuario
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            //password cambia al valor que escribe el usuario
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
