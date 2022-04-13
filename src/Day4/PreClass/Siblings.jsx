import React from "react";

const Child=({value})=>(
    <div>
        <h3>Count is: {value}</h3>
    </div>
);

const Button=({handleClick,label})=>(
    <button onClick={handleClick}>{label}</button>
);

function D4Sbilings(){
    const [count,setCount]=React.useState(0);
    const handleChange=(value)=>{
        setCount(count+value);
    };
    return (
        <div>
            <h1>Siblings</h1>
            <Child value={count}
            handleDec={()=>handleChange(-1)}
            handleInc={()=>handleChange(1)}
            />
            <Button label="-" handleClick={()=>handleChange(-1)}/>
            <Button label="+" handleClick={()=>handleChange(1)}/>
        </div>
    )
};

export {D4Sbilings};