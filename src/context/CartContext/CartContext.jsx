import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Para realizar solicitudes HTTP
import productsData from "../../assets/Json/products.json"; // Importar JSON para pruebas

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const userId = 1; // Reemplaza con el ID de usuario real de tu contexto de autenticación

  useEffect(() => {
    // Simular la obtención de items del carrito desde un archivo JSON
    const storedCartItems = productsData.filter((item) => item.quantity > 0); // Filtrar items que tienen cantidad
    setCartItems(storedCartItems);
    calculateTotal(storedCartItems);

    // Obtener items del carrito desde el backend
    /*
    axios.get(`/api/cart/${userId}`)
      .then(response => {
        setCartItems(response.data);
        calculateTotal(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los items del carrito:", error);
      });
    */
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);
    alert("Producto agregado al carrito");
    // Simular agregar item al carrito en el backend
    console.log("Producto agregado al carrito:", {
      userId,
      productId: product.id,
      quantity: 1,
    });

    // Agregar item al carrito en el backend
    /*
    axios.post(`/api/cart/${userId}`, { productId: product.id, quantity: 1 })
      .then(response => {
        console.log("Producto agregado al carrito:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el producto al carrito:", error);
      });
    */
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);

    // Simular remover item del carrito en el backend
    console.log("Producto eliminado del carrito:", id);

    // Remover item del carrito en el backend
    /*
    axios.delete(`/api/cart/${userId}/${id}`)
      .then(response => {
        console.log("Producto eliminado del carrito:", response.data);
      })
      .catch(error => {
        console.error("Error al eliminar el producto del carrito:", error);
      });
    */
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    // Simular el proceso de compra
    console.log("Compra exitosa para el usuario:", userId);

    // Procesar la compra en el backend
    /*
    axios.post(`/api/cart/checkout/${userId}`, { cartItems })
      .then(response => {
        console.log("Compra exitosa:", response.data);
        setCartItems([]); // Limpiar el carrito después de la compra
        setTotalAmount(0);
      })
      .catch(error => {
        console.error("Error al realizar la compra:", error);
      });
    */

    setCartItems([]);
    setTotalAmount(0);
    alert("¡Su compra se realizó con éxito!");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalAmount, addToCart, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
