import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import productsData from "../../assets/Json/products.json"; // Importar JSON para pruebas
import { useNavigate } from "react-router-dom";
import { ButtonGeneral } from "../../components/Buttons/ButtonGeneral";
import { useCart } from "../../context/CartContext/CartContext";
import axios from "axios"; // Para realizar solicitudes HTTP

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    // Simular la obtención de productos desde un archivo JSON
    setProducts(productsData);

    // Obtener productos desde el backend
    /*
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
    */
  }, []);

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <div className="divButtonsCard">
                  <ButtonGeneral
                    desc="Detalle"
                    onClick={() => handleViewDetails(product)}
                  />
                  <ButtonGeneral
                    desc="Agregar al carrito"
                    onClick={() => addToCart(product)}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
