import React from "react";
const Child=({value,handleInc,handleDec})=>(
    <div>
        <h1>Count is: {value}</h1>
        <div>
            <button onClick={handleDec}>-</button>
            <button onClick={handleInc}>+</button>
        </div>
    </div>
);

function D4ChildToParent(){
    const [count,setcount]=React.useState(0);
    const handlechange=(value)=>{
        setcount(count+value);
    };
    return (
        <div>
            <h1>Child To Parent</h1>
            <Child value={count}
            handleDec={()=>handlechange(-1)}
            handleInc={()=>handlechange(1)}
            />
        </div>
    )
}
export {D4ChildToParent}