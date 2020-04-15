import { PUT_CART } from '../actions/types';

const initialState = [];

export default (state = initialState, action)  => {

    const { type, payload } = action; 

    switch(type) {
        case PUT_CART:
            return [...state, payload ]
            default:
                return state;
    }
}