import { PUT_CART } from "./types";




export const putCart = (element) => dispatch => {
    dispatch({
        type: PUT_CART,
        payload: element

    });

   
};