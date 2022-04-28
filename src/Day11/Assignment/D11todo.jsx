import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Redux/action';


export const D11todo = () => {

    const [text, setText] = useState("");
    const todos = useSelector(store => store.todo);
    const dispatch = useDispatch();


    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                dispatch(addTodo(text))
                axios.post("http://localhost:3002/todo",{
                    title:text,
                    status:false
                })
            }}>ADD TODO</button>
            {todos.map((e, i) => <div key={i}>{e}</div>)}
        </div>
    );
};