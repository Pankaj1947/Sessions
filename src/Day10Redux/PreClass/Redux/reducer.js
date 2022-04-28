
//it takes two value state and action

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes"

const initState = {
    counter: 0
}

export const reducer = (state = initState, { type, payload }) => {
    console.log(state,type,payload);
    switch (type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter:state.counter+payload
            };

        case REDUCE_COUNTER:
            return {
                ...state,
                counter: state.counter - payload
            };

        default:
            return state;
    }
}