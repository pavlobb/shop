import { PUT_CART, ADD_CART } from "./types";




export const putCart = (item) => dispatch => {

    
dispatch({
        type: PUT_CART,
        payload: item

    });
    
}

export const addCart = (item) =>  dispatch =>{
      dispatch({
          type: ADD_CART,
          payload: item

      })
 }


    
   





   
