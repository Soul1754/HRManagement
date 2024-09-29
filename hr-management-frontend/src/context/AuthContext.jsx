// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    role: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAuth({
          token,
          role: decoded.role, // Ensure 'role' is in JWT payload
          isAuthenticated: true,
        });
      } catch (error) {
        console.error("Invalid token");
        setAuth({
          token: null,
          role: null,
          isAuthenticated: false,
        });
      }
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem("token", token);
    setAuth({
      token,
      role,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      token: null,
      role: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
