import { PUT_CART } from "./types";




export const putCart = (item) => dispatch => {

    
dispatch({
        type: PUT_CART,
        payload: item

    });
    
}



    
   





   
