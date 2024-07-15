import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useProducts } from "../../context/ProductContext/ProductContext";

const MyPlants = () => {
  const [products, setProducts] = useState([]);
  const { getUserProducts } = useProducts();

  const userId = 1;

  useEffect(() => {
    const userProducts = getUserProducts(userId);
    setProducts(userProducts);

    // Backend
    /*
    try {
      const response = await axios.get(`/api/products/my-publications/${userId}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener mis publicaciones:", error);
    }
    */
  }, [getUserProducts]);

  return (
    <Container>
      <h1>Mis Publicaciones</h1>
      <Row className="mt-4">
        {products.map((product) => (
          <Col key={product.product_id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>
                  Cantidad en Stock: {product.stock_quantity}
                </Card.Text>
                <Card.Text>
                  Estado: {product.status ? "Activo" : "Inactivo"}
                </Card.Text>
                <Card.Text>Categoría: {product.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyPlants;
