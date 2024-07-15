import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useProducts } from "../../context/ProductContext/ProductContext";
import "./Publish.css";

const Publish = () => {
  const { addProduct } = useProducts();
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock_quantity: "",
    description: "",
    img: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: form.name,
      price: Number(form.price),
      stock_quantity: Number(form.stock_quantity),
      description: form.description,
      img: form.img,
      category: form.category,
      status: true,
      userId: 1,
    };

    addProduct(newProduct);
    setForm({
      name: "",
      price: "",
      stock_quantity: "",
      description: "",
      img: "",
      category: "",
    });

    // Backend
    /*
    try {
      const response = await axios.post('/api/products', newProduct);
      console.log("Producto agregado:", response.data);
    } catch (error) {
      console.error("Error al publicar el producto:", error);
    }
    */
  };

  return (
    <Container className="ContainerPublish">
      <h1>Publicar Producto</h1>
      <Form onSubmit={handleSubmit} className="formPublish">
        <div>
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
          <Form.Group controlId="formPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formStock">
            <Form.Label>Cantidad en Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock_quantity"
              value={form.stock_quantity}
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
        </div>
        <div>
          <Form.Group controlId="formImage">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="pequeña">Pequeña</option>
              <option value="mediana">Mediana</option>
              <option value="grande">Grande</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Button variant="success" type="submit">
            Publicar
          </Button>{" "}
        </div>
      </Form>
    </Container>
  );
};

export default Publish;
