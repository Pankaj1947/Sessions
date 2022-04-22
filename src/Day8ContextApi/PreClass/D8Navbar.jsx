import React, { useContext } from 'react'
import { CartContext } from './contexts/CartContext'

export const D8Navbar = () => {
    const { cartCount } = useContext(CartContext)
    return (
        <h1>Cart: {cartCount}</h1>
    )
}
