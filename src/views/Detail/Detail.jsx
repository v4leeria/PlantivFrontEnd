import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../assets/Json/products.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simular producto desde el archivo JSON
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);

    // Para Backend
    /*
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Error al obtener el producto:", error);
      });
    */
  }, [id]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container>
      <Card className="cardDetail">
        <Col>
          <Card.Img src={product.image} />
        </Col>

        <Col>
          <Card.Title>{product.name}</Card.Title>

          <Card.Body>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Tamaño: {product.size}</Card.Text>
            <Card.Text>Precio: ${product.price}</Card.Text>
          </Card.Body>
        </Col>
      </Card>
    </Container>
  );
};

export default Detail;
