import React, { useContext, useState } from 'react'
import { addCounter, reduceCounter } from './Redux/action';
import { AppContext } from './Redux/AppContext';

export const D10Counter = () => {
    const { dispatch, getState } = useContext(AppContext);
    const { counter } = getState();

    const handleAdd = () => {
        dispatch(addCounter(1));
    }

    const handleReduce = () => {
        dispatch(reduceCounter(1));
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleReduce}>SUB</button>
            <button onClick={handleAdd}>ADD</button>
        </>
    )
}
