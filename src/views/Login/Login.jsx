// src/pages/Login.js
import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import login from "../../assets/Json/login.json";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const { setUserId, setRole, saveToken, makeRequest } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeRequest("post", login, form);
      if (response.status === 200) {
        const data = response.data; //obtener los datos de la respuesta
        const token = data.token; //obtener el token almacenado dentro del cuerpo de data
        const userId = data.userId; //obtner el id del usuario almacenado dentro de data
        const userRole = data.userRole; //obtener el role almacenado dentro del cuerpo de data

        saveToken(token);
        setUserId(userId);
        setRole(userRole);
      }
      navigate("/");
    } catch (error) {
      setError("No pasar"); //la respuesta del alert viene del backend
      console.error(response.status);
    }
  };

  return (
    <Container>
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
