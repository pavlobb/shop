import React from 'react';
import CartForm from './cartForm/CartForm';
import { connect } from 'react-redux';
import { addCart} from '../../Store/actions/cart';






const Cart = ({products, totalCount, totalPrice, addCart}) => {

  
 const renderCart = (element) =>  ( 
 <CartForm
 el={element} 
 key={element.id}
 addCart={() => addCart(element)}
 
 
 />)
 
 
    return (
  
       <div className="container">
 <h1 className="text">Корзина</h1>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th >Назва товару</th>
                    <th></th>
                    <th >Ціна</th>
                    <th >Кількість</th>
                    <th >Сума</th>
                   
                </tr>
            </thead>
            <tbody >
                
            
{ products.map(el => renderCart(el)) }

       <tr>
                    <th></th>
                    <th >Загальна сума</th>
                    <th></th>
                    <th></th>
                    <th >{`${totalCount} шт`}</th>
                    <th >{`${totalPrice} грн`} </th>
                </tr>
            </tbody>
        </table>
        
        </div>

      
       
      
    )

    
     
}

const mapStateProps = state => ({
    products: state.cart.putCartItems,
    totalCount: state.cart.totalCount,
    totalPrice: state.cart.totalPrice
    
  });

export default connect(mapStateProps, {addCart})(Cart);