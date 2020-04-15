import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListProduct from '../products/ListProduct';
import Cart from '../bascket/Cart';





const Routes = () => {
    return (
        
            <Switch>
                <Route exact path="/" component={ListProduct} />
                <Route path="/cart" component={Cart} />
            </Switch>

    )
}



export default Routes;