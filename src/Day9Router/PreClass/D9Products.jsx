import React from 'react'
import { useParams } from 'react-router-dom'

export const D9Products = () => {
    const { id } = useParams();
    return (
        <div>Product id:{id}</div>
    )
}
