import React from "react";
import { D4todoinput } from "./D4todoinput"
import { D4todoitem } from "./D4todoitem";

export const D4todo = () => {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (data) => {
        setTodos([...todos, data]);
    }

    return (
        <div>
            <D4todoinput addTodo={addTodo} />
            {todos.map((e) => (
                <D4todoitem todo={e} />))}
        </div>
    );
};