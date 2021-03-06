import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const handleSignin = ({ username, password }) => {
        if (username === "admin" && password === "admin") {
            setIsAuth(true);
        }
        else {
            alert("wrong password");
        }
    }

    const handleSignout = () => {
        setIsAuth(false);
    }

    const value = { isAuth, handleSignin, handleSignout }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}