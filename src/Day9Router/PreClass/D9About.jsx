import React from 'react'
import { useNavigate } from 'react-router-dom'

export const D9About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>About us:</h3>
            <p>We are best</p>
            <p>Thanks!</p>
            <button onClick={() => {
                navigate("/products/refrigrator")
            }}>Submit</button>
        </div>
    )
}
