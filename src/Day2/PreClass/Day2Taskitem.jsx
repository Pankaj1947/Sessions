import React from "react";

function Day2Taskitem({title,status,color}){
    return (
    <div>
        <h3 style={{ color }}>{`${title}-${status}`}</h3>
    </div>
    )
}

export default Day2Taskitem;