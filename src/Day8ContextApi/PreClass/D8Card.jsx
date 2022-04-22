import React, { useContext } from 'react'
import { CartContext } from './contexts/CartContext';

export const D8Card = () => {
    const { handleUpdate } = useContext(CartContext);
    return (
        <div>
            <button onClick={() => {
                handleUpdate(1);
            }}>Buy Now!</button>
        </div>
    )
}
