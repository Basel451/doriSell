import React, { useContext } from "react";
import axios from "axios";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextWrapper = ({ children }) => {
  async function login(email, password) {
    const message = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    console.log(message.data.message);
  }

  async function register() {}

  async function logout() {}

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
