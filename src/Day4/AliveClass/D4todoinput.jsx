import React from "react"

export const D4todoinput = ({ addTodo }) => {
    const [text, setText] = React.useState("");
    return (
        <div>
            {text}
            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }}
            />
            <button
                onClick={() => {
                    addTodo(text)
                }}>Add Todo</button>
        </div>
    )
}