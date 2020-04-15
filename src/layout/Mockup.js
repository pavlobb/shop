import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavHead from './NavHead';
import Footer from './Footer';
import Routes from '../component/routing/Routes';


const Mockup =  () => {
    return(
        <Container>
  <Row>
    <Col>
    <NavHead />
           <Routes />
    <Footer />
   </Col>
  </Row>
</Container>
    )
}
export default Mockup;