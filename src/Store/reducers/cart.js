import { PUT_CART } from '../actions/types';

const initialState = {
    putCartItems: [],
    totalCount: 0,
    totalPrice: 0
};

export default (state = initialState, action)  => {

    const { type, payload } = action; 

    switch(type) {
        case PUT_CART:
           const { id } = payload
           const fndx = state.putCartItems.findIndex(e => e.id === id);
           console.log('fndx', fndx);
           if (fndx === -1) {
            const item = {...payload, count: 1, total: payload.price }
            return  {...state, putCartItems:[ ...state.putCartItems, item]} 
        }else {
            const addCart = state.putCartItems.map(cartItem => {
                if (cartItem.id === id) {
                    cartItem.total = cartItem.total + cartItem.price
                    cartItem.count++;

                }
                return cartItem
            })
            return {...state, putCartItems: addCart}  
        }  
            default:
                return state;
    }
}