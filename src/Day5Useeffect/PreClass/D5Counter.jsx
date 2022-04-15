import React from "react";

export default function D5Counter() {
    const [count, setCount] = React.useState(10);

    React.useState(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                if (prev === 0) {
                    clearInterval(id);
                    return prev
                }
                return prev - 1;
            })
        }, 1000)
    }, []);

    return (
        <>
        <h1>Counter {count}</h1>
        </>
    )
}