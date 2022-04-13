import { useState } from "react";
function Day2Counter(){
    const [counter,setCounter]=useState(0);
    
    return (
        <div>
            <h3>Counter:{counter}</h3>
            <button onClick={()=>{
                setCounter(counter+1);}}>Add 1</button>
            <button onClick={()=>{
                setCounter(counter-1);}}>Sub 1</button>
        </div>
    )
}
export default Day2Counter;