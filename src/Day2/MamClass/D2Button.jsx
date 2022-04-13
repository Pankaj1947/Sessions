import { useState } from "react";

function D2Button(){
    const [count,setCount]=useState(0);
    const handleInc=(steps)=>{
        setCount(count+steps);
    }
    const double=(value)=>{
        setCount(count*value);
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>handleInc(1)}>ADD</button>
        <button onClick={()=>handleInc(-1)}>MINUS</button>
        <button onClick={()=>double(2)}>DOUBLE</button>
        </>
    )
}

export default D2Button;