import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import images from "../../assets/Json/images.json"; // Asegúrate de que la ruta sea correcta

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    imgCustomer: "",
  });

  useEffect(() => {
    setForm({
      name: "Juan",
      lastName: "Pérez",
      email: "juan@example.com",
      imgCustomer: images[0].img, // Asignar una imagen por defecto
    });
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
      <h1>Mi Perfil</h1>
      <img
        src={form.imgCustomer}
        alt="Perfil"
        style={{ width: "20%", borderRadius: "2rem" }}
      />
      <Form>
        {" "}
        <Form.Group controlId="formImage">
          <Form.Label>Seleccionar Imagen</Form.Label>
          <Form.Control as="select" onChange={handleImageChange}>
            {images.map((image) => (
              <option key={image.id} value={image.id}>
                {`Imagen ${image.id}`}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={form.name} readOnly />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" value={form.lastName} readOnly />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={form.email} readOnly />
        </Form.Group>
        {/* Aquí es donde se agrega el selector de imagen */}
      </Form>
    </Container>
  );
};

export default Profile;
