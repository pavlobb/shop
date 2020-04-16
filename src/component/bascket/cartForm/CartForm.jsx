import React, { Fragment } from 'react';





const CartForm = ({el, addCart}) => {
 return (
  <Fragment>
            <tr >
                <th >
                    <button  type="primary" danger>
                        x
                                </button >
                </th>
                <th >{el.name}</th>
                <th ><button  type="primary" danger>
                    -
                                </button >

                    <button  type="primary">
                        +
                                    </button></th>
                <th>{`${el.price} грн `}</th>
                <th >{`${el.count} шт`}</th>
                <th >{`${el.total} грн`}</th>
                
                
               
            </tr>

        </Fragment>
    )
}

export default CartForm;