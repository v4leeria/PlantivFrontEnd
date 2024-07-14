import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import login from "../../assets/Json/login.json"; // Importar JSON para pruebas
import axios from "axios"; // Para solicitudes HTTP
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const { setUserId, setRole, saveToken, makeRequest } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name); // Para depuración
    console.log(e.target.value); // Para depuración
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulación de inicio de sesión con un JSON de prueba
      if (form.email === login.email && form.password === login.password) {
        const token = "fakeToken"; // Simulación de un token
        const userId = 1; // Simulación de un ID de usuario
        const userRole = "user"; // Simulación de un rol de usuario

        saveToken(token);
        setUserId(userId);
        setRole(userRole);
        navigate("/products"); // Redirigir a la página principal
      } else {
        setError("Credenciales incorrectas"); // Mostrar error si no coinciden
      }

      // En una implementación real, realiza una solicitud de inicio de sesión al backend
      /*
      const response = await axios.post('/api/login', form);
      const { token, userId, userRole } = response.data;

      saveToken(token);
      setUserId(userId);
      setRole(userRole);
      navigate("/products"); // Redirigir a la página principal
      */
    } catch (error) {
      setError("No pasar"); // La respuesta del alert viene del backend
      console.error(error); // Imprimir error en la consola
    }
  };

  return (
    <Container className="ContainerLogin">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center">Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
