import React, { useContext, useState } from "react";
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext).auth;
}
export function useSetAuth() {
  return useContext(AuthContext).setAuth;
}
export function useHandleLogout() {
  return useContext(AuthContext).handleLogout;
}

export default AuthContext;
