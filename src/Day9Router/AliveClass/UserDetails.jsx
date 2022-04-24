import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

export const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(({ data }) => {
            console.log("Users", data);
            setUser(data.data);
        })
    }, [])

    const { isAuth } = useContext(AuthContext);
    if (!isAuth) {
        //take user to login page!
        return <Navigate to={"/login"} />
    };
    return (
        <>
            <div style={{
                display: "flex",
                width: "50%", margin: "auto",
                gap: "10px", background: "brown",
                color: "white"
            }}>
                <div>
                    <img style={{ height: "100%" }} src={user.avatar} />
                </div>
                <div>
                    <p>{`ID: ${user.id}`}</p>
                    <h3>{`${user.first_name} ${user.last_name}`}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
            <button onClick={() => {
                navigate("/users");
            }}>Go Back</button>
        </>
    )
}