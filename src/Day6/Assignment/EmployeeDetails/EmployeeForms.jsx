import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "./Emp.module.css";

const initState = {
    name: "",
    age: "",
    address: "",
    isMarried: "",
    salary: "",
    department: ""
}

export const EmployeeForms = () => {
    const [formData, setFormData] = useState(initState);
    const { name, age, address, isMarried, salary, department } = formData;
    const [empData, setEmpData] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(`http://localhost:3002/employeedetails`).then(res => {
            setEmpData(res.data);
            console.log((res.data))
        })
    }

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        fetch("http://localhost:3002/employeedetails", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                age: age,
                address: address,
                isMarried: isMarried,
                salary: salary,
                department: department
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            getData();
        })
    }

    return (
        <div>
            <div>
                <h1>Add Employee Details</h1>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type="text" onChange={handleChange} name="name" value={name} placeholder="Name" />
                    </label>
                    <br /><br />
                    <label>
                        <input type="number" onChange={handleChange} name="age" value={age} placeholder="Age" />
                    </label>
                    <br /><br />
                    <label>
                        <input type="text" onChange={handleChange} name="address" value={address} placeholder="Address" />
                    </label>
                    <br /><br />
                    <label>Married
                        <input type="checkbox" onChange={handleChange} name="isMarried" checked={isMarried} />
                    </label>
                    <br /><br />
                    <label>
                        <input type="number" onChange={handleChange} name="salary" value={salary} placeholder="Salary" />
                    </label>
                    <br /><br />
                    <select name='department' value={department} onChange={handleChange}>
                        <option value="Department">Department</option>
                        <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="CEO">CEO</option>
                        <option value="UI UX Designer">UI UX Designer</option>
                    </select>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <h1>Employee Details</h1>
            <div className={style.container}>
                {empData.map(e => <div key={e.id}>
                    <h4 style={{color:"brown"}}>{`Employee No: ${e.id}`}</h4>
                    <h2 style={{ color: "teal" }}>{`Name: ${e.name}`}</h2>
                    <h3>{`Age: ${e.age}`}</h3>
                    <p>{e.isMarried ? "Married" : "Single"}</p>
                    <p>{`Address: ${e.address}`}</p>
                    <p>{`Salary: ${e.salary}`}</p>
                    <p>{`Department: ${e.department}`}</p>
                    
                </div>)}
            </div>
        </div>
    )
}
