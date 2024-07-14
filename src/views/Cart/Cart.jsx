import React from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { Table, Button } from "react-bootstrap";

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart, checkout } = useCart();

  return (
    <div>
      <h1>Mi Carrito</h1>
      <Table striped bordered hover>
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
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: ${totalAmount}</h3>
      <Button variant="success" onClick={checkout}>
        Comprar
      </Button>
    </div>
  );
};

export default Cart;
