import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { UserContext } from "../../context/UserContext/UserContext";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    comuna: "",
    region: "",
    phone_number: "",
  });
  const [error, setError] = useState(null);
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch (error) {
      setError("Registro inválido");
    }
  };

  return (
    <Container className="ContainerRegister">
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="text-center">Register</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="formRegister" onSubmit={handleSubmit}>
            <div>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Ingresa tu apellido"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formComuna">
                <Form.Label>Comuna</Form.Label>
                <Form.Control
                  type="text"
                  name="comuna"
                  value={form.comuna}
                  onChange={handleChange}
                  placeholder="Ingresa tu comuna"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formRegion">
                <Form.Label>Región</Form.Label>
                <Form.Control
                  type="text"
                  name="region"
                  value={form.region}
                  onChange={handleChange}
                  placeholder="Ingresa tu región"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  placeholder="Ingresa tu teléfono"
                  required
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-3">
                Register
              </Button>{" "}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
