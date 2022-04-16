import React from "react";

function D5Demo() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("called useEffect at", Date.now());
        return () => {
            console.log("called cleanup at", Date.now());
        };
    }, [count]);

    return (
        <>
            <div>
                <h1>Demo: {count}</h1>
                <button onClick={() => setCount(count + 1)}>ADD</button>
            </div>
        </>
    )
}

export { D5Demo }