import { useState } from "react";
import { AuthContext } from "./authContextObject";

export function AuthProvider({ children }) {
  const [usuario] = useState({
    nombre: "Carlos Gómez",
    rol: "Miembro Premium",
  });

  const value = { usuario };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
