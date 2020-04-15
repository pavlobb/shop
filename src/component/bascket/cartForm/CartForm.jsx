import React, { Fragment } from 'react';





const CartForm = ({el}) => {
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
                <th >{el.count}</th>
                <th >{el.total}</th>
            </tr>

        </Fragment>
    )
}

export default CartForm;