import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Publish = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock_quantity: "",
    img: "",
    category_id: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aquí puedes manejar la lógica para enviar el formulario al backend
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStockQuantity">
          <Form.Label>Cantidad en Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock_quantity"
            value={form.stock_quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formImg">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategoryId">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="number"
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Publicar
        </Button>
      </Form>
    </Container>
  );
};

export default Publish;
