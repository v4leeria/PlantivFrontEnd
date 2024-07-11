import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const Cart = () => {
  // Esta es solo una lista de ejemplo; en una aplicación real, obtendrías esta información de un estado global
  const cartItems = [
    { id: 1, name: "Planta 1", price: 100, quantity: 1 },
    { id: 2, name: "Planta 2", price: 150, quantity: 2 },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h1>Carrito de Compras</h1>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Total: ${total}</h3>
      <Button variant="primary">Checkout</Button>
    </Container>
  );
};

export default Cart;
