import React from "react";

function D4TodoInput({onClick}){
    const [title,setTitle]=React.useState("");

    return <div>
        <input placeholder="Add Something" value={title} 
        onChange={(e)=>setTitle(e.target.value)}/>

        <button onClick={()=>onClick(title)}>ADD</button>
    </div>
}

export {D4TodoInput};