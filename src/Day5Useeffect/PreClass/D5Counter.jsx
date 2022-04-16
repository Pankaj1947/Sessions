import React from "react";

export default function D5Counter() {
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {
        const id = setInterval(() => {
            console.log("inside set Interval");
            setCount((prev) => {
                if (prev === 0) {
                    clearInterval(id);
                    return prev
                }
                return prev - 1;
            })
        }, 1000)
        //cleanup
        return () => {
            console.log("cleaning up any setIntervals");
            clearInterval(id);
        };
    }, []);


    return (
        <>
            <h1>Counter {count}</h1>
        </>
    )
}

//useeffect has an empty dependency
// it willl get called when the component get unmounted 

//if it has a dependency, count
// it will get called, everytime count get updated,
//but before the useeffect callback is triggered 