import React from 'react'
import { Link } from 'react-router-dom'

export const D9navbar = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users List</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}
