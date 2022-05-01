import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import IndividualTodo from "./IndividualTodo";

const Main = () => {
    return (
        <div>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Todos />}>
                        <Route path="/todo/:id" element={<IndividualTodo />} />
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
};

export default Main;