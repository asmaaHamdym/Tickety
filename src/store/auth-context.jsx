import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [tokenExpiressAt, setTokenExpiresAt] = useState("");

  const handleUser = (user) => {
    setUser(user);
  };

  const handleToken = (token) => {
    setToken(token);
  };

  const handleTokenExpiresAt = (date) => {
    setTokenExpiresAt(date);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleUser,
        token,
        handleToken,
        tokenExpiressAt,
        handleTokenExpiresAt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
