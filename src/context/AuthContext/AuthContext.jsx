import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

//Se define el estado de user, y se define como null
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Lógica de autenticación simulada
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
