import React from 'react';
import CartForm from './cartForm/CartForm';
import { connect } from 'react-redux';





const Cart = ({products}) => {

  
 const renderCart = (element) =>  ( 
 <CartForm
 el={element} 
 id={element.id}
 
 />)
 
 const sum = products.reduce((sum, count) => sum + count.count, 0);
 const sumPrice = products.reduce((sum, count) => sum + count.price * count.count, 0);
    
    return (
  
       <div className="container">
 <h1 className="text">Корзина</h1>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th >Назва товару</th>
                    <th ></th>
                    <th >Кількість</th>
                    <th >Ціна</th>
                </tr>
            </thead>
            <tbody >
                
            
{ products.map(el => renderCart(el)) }

       <tr>
                    <th></th>
                    <th >Загальна сума</th>
                    <th ></th>
                    <th >{sum}</th>
                    <th >{sumPrice}</th>
                </tr>
            </tbody>
        </table>
        
        </div>

      
       
      
    )

    
     
}

const mapStateProps = state => ({
    products: state.cart.putCartItems
    
  });

export default connect(mapStateProps)(Cart);