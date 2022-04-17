import { useEffect, useState } from "react";


export const D5Todo = () => {

    const [counter1, setCounter1] = useState(0);

    const [counter2, setCounter2] = useState(0);

    console.log("Before Effect")
    useEffect(() => {
        console.log("Inside Effect 1")
    }, [counter1])
    useEffect(() => {
        console.log("Inside Effect 2")
    }, [counter2])

    console.log("After Effect")

    return <div>Todos:
        <button onClick={()=>{
            setCounter1(counter1+1)
        }}>ADD1</button>
        <button onClick={() => {
            setCounter2(counter2 + 1)
        }}>ADD2</button>
    </div>
}