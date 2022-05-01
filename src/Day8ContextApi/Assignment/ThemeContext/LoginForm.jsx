import React from 'react'
import { useContext, useState } from 'react';

const LoginForm = () => {


    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const field = e.target;
        setForm({
            ...form,
            [field.name]: field.value,
        })
    };


    const handleSubmit = (e) => {

        e.preventDefault();

    }


    return (
        <div>LoginForm
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" name="username" required="required" onChange={handleChange} />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="text" name="password" required="required" onChange={handleChange} />
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm