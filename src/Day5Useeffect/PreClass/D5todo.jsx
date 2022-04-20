import React from "react";

export function D5todo() {
    const [title, setTitle] = React.useState("");
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        getTodos(page);
    }, [page])

    const getTodos = (page = 1) => {
        setIsLoading(true);
        return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks?_limit=5&_page=${page}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData(res);
            })
            .catch((err) => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const addTodos = (title) => {
        const payload = {
            title,
            status: false
        }

        setIsLoading(true);
        return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                return getTodos();
            })
            .catch((err) => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }



    return isLoading ? (
        <div>...Loading</div>
    ) : isError ? (
        <div>Something went wrong</div>
    ) : (
        <div>
            <div>
                <input value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add something" />
                <button onClick={() => addTodos(title)}>ADD</button>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item.id}>{`${item.title}-${item.status}`}</div>
                ))}
            </div>
            <h3>Page: {page}</h3>
            <button disabled={page == 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}