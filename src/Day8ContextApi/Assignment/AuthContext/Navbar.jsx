import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from './AuthContext'

const Btn = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    margin: auto;
    button{
        background-color: brown;
        font-weight:500;
        height: 40px;
        width: 100px;
        margin: auto;
        color: white;
        border-radius: 5px;
    }
`

function Navbar() {
    const { isAuth, toggleAuth } = useContext(AuthContext)

    return (
        <>
            <Btn>
                <h3>
                    {isAuth ? "User Is Logged In, Click here to ->"
                        : "User is not Logged in,Please Click here to ->"}
                </h3>
                <button className="navBtn" onClick={toggleAuth}>
                    {isAuth ? "Logout" : "Login"}
                </button>

            </Btn>
        </>
    )
}

export default Navbar