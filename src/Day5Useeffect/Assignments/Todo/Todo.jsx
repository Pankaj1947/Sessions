import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Day5Todo = () => {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [page])

    const getData = () => {
        axios.get(`http://localhost:3001/todos?_limit=3&_page=${page}`).then(res => {
            setTodo(res.data);
        })
    }


    const addTodos = () => {
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify({ title: title, status: false }),
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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Todo" />
                <button onClick={() => addTodos()}>save</button>
            </div>
            <div>
                {todo.map(e => <div key={e.id}>{e.title}</div>)}
            </div>
            <div>
                <button onClick={() => {
                    setPage(page - 1)
                }}>Prev</button>
                <button onClick={() => {
                    setPage(page + 1)
                }}>Next</button>
            </div>
        </div>
    )
}
