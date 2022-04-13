import React from "react";
import { D4TodoInput } from "./D4TodoInput";
import { D4TodoList } from "./D4TodoList";
import {v4 as uuid} from "uuid";

function D4Todo(){
    const [data,setData]=React.useState([]);
    const [showAll,setShowAll]=React.useState(true);

    const handleAdd=(title)=>{
        const payload={
            title,
            status:false,
            id:uuid()
        }
        setData([...data,payload]);
    }

    const handleDelete=(id)=>{

    }

    const handleToggle=(id)=>{
        const updatedTodo=data.map((item)=>
        item.id===id?{...item,status:!item.status}:item
        );
        setData(updatedTodo)
        
    }


    return (
        <div>
            <D4TodoInput onClick={handleAdd}/>
            {data.filter((item)=>showAll?true:!item.status).map((item)=>(
                <D4TodoList 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                key={item.id} {...item}/>
            ))}

            <button onClick={()=>setShowAll(!showAll)}>
                {showAll?"SHOW ONLY UNFINISHED TASKS":"SHOW ALL"}
            </button>
        </div>
    )
}

export {D4Todo}