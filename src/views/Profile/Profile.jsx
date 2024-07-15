import React, { useState, useEffect } from "react";
import { Container, Form, Card } from "react-bootstrap";
import images from "../../assets/Json/images.json";
import "./Profile.css";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    imgCustomer: "",
  });

  useEffect(() => {
    // Simulación
    setForm({
      name: "Valeria",
      lastName: "Donoso",
      email: "vdonosin@gmail.com",
      comuna: "Puente Alto",
      region: "RM",
      imgCustomer: images[0].img,
    });

    // Backend
    /*
    axios.get('/api/user/profile')
      .then(response => {
        setForm(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos del usuario:", error);
      });
    */
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = images.find(
      (img) => img.id === Number(e.target.value)
    );
    setForm({
      ...form,
      imgCustomer: selectedImage.img,
    });
  };

  return (
    <Container>
      <Card className="cardProfile">
        <Card.Title style={{ textAlign: "center" }}>Mi Perfil</Card.Title>

        <Card.Body className="cardProfileFlex">
          <div className="imagenForm">
            <Card.Img
              variant="top"
              src={form.imgCustomer}
              alt="Perfil"
              className="imgProfile"
            />
            <Form className="formProfile">
              <Form.Group controlId="formImage">
                <Form.Label>Editar avatar</Form.Label>
                <Form.Control
                  className="placeholderProfile"
                  as="select"
                  onChange={handleImageChange}
                  style={{ width: "min-content" }}
                >
                  {images.map((image) => (
                    <option key={image.id} value={image.id}>
                      {`Imagen ${image.id}`}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div>
            <strong>Nombre:</strong> <p>{form.name}</p>
            <strong>Apellido:</strong> <p>{form.lastName}</p>
            <strong>Email:</strong> <p>{form.email}</p>
            <strong>Comuna:</strong> <p>{form.comuna}</p>
            <strong>Región:</strong> <p>{form.region}</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
