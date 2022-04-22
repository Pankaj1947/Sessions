import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const handleUpdate = (value) => {
        setCartCount(cartCount + value)
    }

    return <CartContext.Provider value={{cartCount,handleUpdate}}>{children}</CartContext.Provider>
}