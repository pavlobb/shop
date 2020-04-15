import { GET_PRODUCTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action)  => {

    const { type, payload } = action; 

    switch(type) {
        case GET_PRODUCTS:
            return  payload ;
            default:
                return state;
    }
}