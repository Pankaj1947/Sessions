import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './Redux/action';


export const D12Todo = () => {

  const [text, setText] = useState("");
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = () => {
    axios.get("http://localhost:3005/todo").then(({ data }) => {
      dispatch(addTodo(data));
      console.log(data);
    })
  }

  const addTodos = () => {
    axios.post("http://localhost:3005/todo", {
      title: text,
      status: false
    }).then(() => getTodos());
  }


  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        addTodos()
      }}>ADD TODO</button>
      {todos.map((e)=><div key={e.id}>{e.title}</div>)}
    </div>
  );
};
