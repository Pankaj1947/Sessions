import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './Redux/action';
export const D11Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count);
    return (
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={() => {
                dispatch(addCount(1))
            }}>Add 1</button>
        </div>
    )
}
