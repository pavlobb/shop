import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlasses, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';






const NavHead = () => {
    return (
<Navbar  bg="dark" variant="dark" expand="lg">
  <Navbar.Brand  href="#home"><FontAwesomeIcon icon={faGlasses} />  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact to="/" >Магазин</NavLink>
    
    </Nav>
    <Nav inline>
    <NavLink to="/cart" className="color"  >
    <FontAwesomeIcon icon={faShoppingCart} />{' '}Кошик
    </NavLink>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}


export default NavHead ;