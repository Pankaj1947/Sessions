import React from "react";
import Day2Taskitem from "./Day2Taskitem";

function Day2task(){
    const [query,setQuery]=React.useState("");
    const [tasks,setTasks]=React.useState([]);
    const handleChange=(e)=>{
        const {value}=e.target;
        setQuery(value);
    }
    const handleAdd=()=>{
        const payload={
            title:query,
            status:false
        };
        let newTasks=[...tasks,payload];
        setTasks(newTasks);
    };
    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <input value={query} onChange={handleChange} placeholder="add something"/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                {tasks.map((item,index)=>{
                    return <Day2Taskitem color={index%2===0?"blue":"green"} {...item}/>})}
            </div>
        </div>
    )
}

export default Day2task