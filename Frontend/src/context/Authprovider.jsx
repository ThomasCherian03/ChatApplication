import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie"
export const AuthContext = createContext()

export const AuthProvider = ({children}) => { // we are passing children so that other components can use it
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);

  return (
    <div>
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    </div>
  );
}; 

// creating our own hook so that our created context can be used in other component
export const useAuth = () => useContext(AuthContext);