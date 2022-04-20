import React from 'react'
import axios from 'axios';
export const D6Form = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        age: "",
        email: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/users", formData).then(() => {
            alert("User Created Successfully");
            setFormData({
                username: "",
                age: "",
                email: ""
            });
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>SignUp</h3>
            <input id='name' type="text" onChange={handleChange} placeholder="enter username" />
            <br />
            <input id='age' type="number" onChange={handleChange} placeholder="enter age" />
            <br />
            <input id='email' type="email" onChange={handleChange} placeholder="enter email" />
            <br />
            <input type="submit" value="Submit Data" />
        </form>
    )
}
