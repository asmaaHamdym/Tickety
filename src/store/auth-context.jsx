import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({children}){
  const [user, setUser] = useState(null);

  const handleUser = (user) =>{
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleUser
      }}>
        {children}
    </AuthContext.Provider>
  )
}