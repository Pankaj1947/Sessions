import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

export const D9Users = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1")
        .then(({ data }) => {
            console.log("Users", data);
            setList([...data.data]);
        })
    }, [])
    const { isAuth } = useContext(AuthContext);
    if (!isAuth) {
        //take user to login page!
        return <Navigate to={"/login"} />
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {list.map((e) => (
                <Link to={`/users/${e.id}`} key={e.id}>
                    {e.id}. {e.first_name}
                </Link>
            ))}
        </div>
    )
}