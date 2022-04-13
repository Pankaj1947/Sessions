import React from "react";
import {v4 as uuid} from "uuid"
import { D3Listitem } from "./D3Listitem";

function D3List(){
    const [query,setQuery]=React.useState("");
    const [list,setList]=React.useState([]);
    const handleAdd=()=>{
        const payload={
            title:query,
            status:false,
            id:uuid()
        };
        setList([...list,payload])
    };
    const handleDelete=(id)=>{
        let updatedList=list.filter(item =>item.id!==id)
        setList(updatedList);
    }
    return (
        <>
        <h1>List of Items</h1>
        <div>
            <input value={query} 
                onChange={(e)=>setQuery(e.target.value)} 
                type="text" 
                placeholder="Add something"/>
            <button onClick={handleAdd}>Add</button>
        </div>
        <div>{list.length>0&& `count is ${list.length}`}</div>
        <div>
            {list.map((item,index)=>(
        <D3Listitem isHidden={index%2===0} handleDelete={handleDelete} key={item.id} {...item}/>
            ) )}
        </div>
        </>
    )
}
export {D3List}