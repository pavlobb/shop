import {  PUT_CART } from '../actions/types';

const initialState = {
    putCartItems: [],
    totalCount: 0,
    totalPrice: 0
};

export default (state = initialState, action)  => {

    const { type, payload } = action; 

    switch(type) {
       
        case PUT_CART:
       
    
           const fndx = state.putCartItems.findIndex(e => e.id === payload.id);
           console.log('fndx', fndx);
           if (fndx === -1) {
            const item = {...payload, count: 1, total: payload.price }
            return  {...state, 
                     putCartItems:[ ...state.putCartItems, item],
                     totalCount: state.totalCount + item.count,
                     totalPrice: state.totalPrice + item.price
                    
                    } 
        }else {

            const addCart = state.putCartItems.map(cartItem => {
                if (cartItem.id === payload.id) {
                    cartItem.total = cartItem.total + cartItem.price
                    cartItem.count++;

                }
                return cartItem
            })
            return {...state, 
                putCartItems: addCart,
                totalCount:   state.putCartItems.reduce((sum, count) => sum + count.count, 0),
                totalPrice: state.putCartItems.reduce((sum, count) => sum + count.price * count.count, 0)
               
            }  
        }  
            default:
                return state;
    }
}

//const sum = initialState.putCartItems.reduce((sum, count) => sum + count.count, 0);
 //const sumPrice = initialState.reduce((sum, count) => sum + count.price * count.count, 0);