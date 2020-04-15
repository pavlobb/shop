import React from 'react'
import { Card as CardComponent, Button } from 'react-bootstrap';


const Card = ({el, putCart}) => {
   return (
     

< CardComponent >
 <CardComponent.Img variant="top" src={el.image} />
 <CardComponent.Body className="text-center">
 <CardComponent.Title>{ el.name }</CardComponent.Title>
   <CardComponent.Text>     Сонцезахисні окуляри    </CardComponent.Text>
   <CardComponent.Title>{ `${el.price} грн` }</CardComponent.Title>
 </CardComponent.Body>
 <CardComponent.Footer style={{ padding: '0'}}  >
 
 <Button 
 variant="outline-dark" 
 size="lg" 
 block  
 onClick={() => putCart(el)}
 style={{ borderRadius: '0'}}>
      добавити в кошик
</Button>{' '}
 </CardComponent.Footer >
</CardComponent>


    );
    }

 export default Card;