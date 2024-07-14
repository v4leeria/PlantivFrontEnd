// ProductContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Función para agregar un nuevo producto
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);

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

  // Función para obtener los productos de un usuario específico
  const getUserProducts = (userId) => {
    return products.filter((product) => product.userId === userId);

    // Backend
    /*
    try {
      const response = await axios.get(`/api/products/my-publications/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener mis publicaciones:", error);
      return [];
    }
    */
  };

  return (
    <ProductContext.Provider value={{ addProduct, products, getUserProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
