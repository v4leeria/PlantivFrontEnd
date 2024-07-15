import React from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart, checkout } = useCart();

  return (
    <Container className="carrito">
      <h1 className="cartTitle">Mi Carrito</h1>
      <Table className="cartTable">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                  className="btnRemove"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="totalRow">
        <Col className="totalAmount">
          <p>Total: ${totalAmount}</p>
        </Col>
        <Col className="checkoutButton">
          <Button variant="success" onClick={checkout}>
            Comprar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
