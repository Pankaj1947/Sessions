import {useEffect} from "react";
export const D5Todo=()=>{
    console.log("Before Effect")
useEffect(()=>{
    console.log("Inside Effect")
})

    console.log("After Effect")

    return <div>Todos:</div>
}