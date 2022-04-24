import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

export const D9Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { handleSignin, isAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignin({ username, password })
    }
    return !isAuth ? (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='username' type="text" value={username} onChange={
                    (e) => setUsername(e.target.value)
                } />
                <input placeholder='username' type="password" value={password} onChange={
                    (e) => setPassword(e.target.value)
                } />
                <input type="submit" value="Login" />
            </form>
        </div>
    ) : (
        <Navigate to="/users" />
    )
}