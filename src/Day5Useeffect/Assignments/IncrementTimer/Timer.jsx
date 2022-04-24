import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [time, setTime] = useState(0);
    const [end, setEnd] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            setTime((prev) => {
                if (prev === end) {
                    clearInterval(id);
                    return prev;
                }
                return prev + 1;
            })
        }, 1000)
        return () => {
            clearInterval(id);
        }
    }, [])

    return (
        <div>Timer: {time}</div>
    )
}
