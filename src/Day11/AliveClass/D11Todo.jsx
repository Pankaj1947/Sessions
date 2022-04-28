import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Redux/action';

export const D11Todo = () => {
    const [text,setText]=useState("");
    const todos=useSelector(store=>store.todo);
    const dispatch=useDispatch();
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>{
            dispatch(addTodo(text))
        }}>ADD TODO</button>
        {todos.map((e,i)=><div key={i}>{e}</div>)}
    </div>
  )
}
