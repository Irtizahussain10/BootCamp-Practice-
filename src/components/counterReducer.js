import { Increment, Decrement } from './actions.js';

const initialState = {
    counter: 0
};

export default function CounterReducer(state = initialState, action) {

    switch (action.type) {
        case Increment:
            return {
                ...state,
                counter: state.counter + 1
            };
        case Decrement:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

