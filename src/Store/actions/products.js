import glass from '../../image/glass.jpg'


import {
    GET_PRODUCTS
} from './types';

const data = [{
        id: 1,
        name: 'Окуляри',
        image: glass,
        price: 10

    },
    {

        id: 2,
        name: 'Окуляри',
        image: glass,
        price: 15
    },
    {

        id: 3,
        name: 'Окуляри',
        image: glass,
        price: 20

    }
];


export const getProducts = () => dispatch => {
    dispatch({
        type: GET_PRODUCTS,
        payload: data
    });
};
