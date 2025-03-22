import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (!isExpired) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const admin = {
    username: "admin",
    password: "qwerty",
  };

  const login = (username, password) => {
    if (username === admin.username && password === admin.password) {
      const token = JSON.stringify({
        username: "admin",
        exp: Math.floor(Date.now() / 1000) + 3600,
      });

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      return { success: true };
    }

    return {
      success: false,
      message:
        "well well well, see küll õige parool pole, paneb mind kahtlema kas sa üldse oled admin. ja vaata mis sa nüüd teinud oled, css läks sinu pärast katki",
    };
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
