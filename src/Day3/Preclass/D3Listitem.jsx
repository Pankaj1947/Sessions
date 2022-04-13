import React from "react";

function D3Listitem({title,id,status,handleDelete,isHidden}){
    if(isHidden){
        return null;
    }
    return (
        <div style={{border:"1px solid black",margin:"10px", padding:"10px"}}>
            <h3>{title}</h3> 
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}

export {D3Listitem}