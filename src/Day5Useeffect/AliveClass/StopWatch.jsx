import { useEffect, useState } from "react"


export const StopWatch = () => {
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        const id = setInterval(() => {
            console.log("Interval", timer);
            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(id);
                    return prev;
                }
                return prev - 1;
            });
        }, 1000)
        return () => {
            clearInterval(id);
            console.log("Unmounted")
        }
    }, []);


    return (
        <h1>Timer:{timer}</h1>
    )
}
