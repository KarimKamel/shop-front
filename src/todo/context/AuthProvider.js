import React, { createContext } from "react";

export const AuthContext = React.createContext();
const user = { name: "karim", role: 0 };

export default function AuthProvider({ children }) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
