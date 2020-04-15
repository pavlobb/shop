import React, {useEffect} from 'react';
import { CardDeck } from 'react-bootstrap';
import Card from './card/Card';
import { connect } from 'react-redux';
import {getProducts} from '../../Store/actions/products';
import {putCart} from '../../Store/actions/cart';


const ListProduct = ({ getProducts, products, putCart}) => {

  useEffect(() => { 
    getProducts();},
        [getProducts] );

  const renderProducts = (element) => (
  
  <Card
   el={element} 
  key={element.id}
  putCart={putCart}  />
  
  )

    return(
       
<CardDeck>
  { products.map(el => renderProducts(el)) }
</CardDeck>

    )
}



const mapStateProps = state => ({
  products: state.products,
  
});


export default connect(mapStateProps, { getProducts, putCart })(ListProduct);