import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "Planta 1", description: "Una planta muy bonita", price: 100 },
  {
    id: 2,
    name: "Planta 2",
    description: "Otra planta muy bonita",
    price: 150,
  },
  // Agrega más productos aquí
];

const Products = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
