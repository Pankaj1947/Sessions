import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

const DisplayUser = () => {

    const { token } = useContext(AuthContext)
    console.log(token)
    return (
        <div>
            <h3> {token !== "" ? `Your login Token is : ${token}` : ""}</h3>
        </div>
    )
}

export default DisplayUser;