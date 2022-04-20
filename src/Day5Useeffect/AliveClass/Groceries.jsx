import { useEffect, useState } from "react";
import axios from "axios";

export const Groceries = () => {
    const [text, setText] = useState("");
    const [groceries, setGroceries] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
    }, [page])

    const getData = () => {
        axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then(res => {
            setGroceries(res.data);
        })
    }

    return (
        <div>
            <input type="text" onChange={(e) =>
                setText(e.target.value)
            } />
            <button onClick={() => {
                // axios.post("http://localhost:3001/groceries",{})
                fetch("http://localhost:3001/groceries", {
                    method: "POST",
                    body: JSON.stringify({ title: text, purchased: false }),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(() => {
                    getData();
                })
            }}>Save Grocery</button>
            {groceries.map(e => <div key={e.id}>{e.title}</div>)}
            <button disabled={page == 1} onClick={() => {setPage(page - 1)}}>Prev</button>
            <button disabled={page == 4} onClick={() => {setPage(page + 1)}}>Next</button>

        </div>
    )
}