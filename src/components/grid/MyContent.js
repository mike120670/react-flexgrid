import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class MyContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>

          <Col>
          <h3> Test </h3> 
         <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

</Col>
        </Row>
           <Row>

          <Col><h3> Test </h3>
         <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

</Col>
        </Row>
        
        <Row>
          <Col>Lorem ipsum dolor sit amet,</Col>
          <Col>Lorem ipsum dolor sit amet,</Col>
          <Col>Lorem ipsum dolor sit amet,</Col>
          <Col>Lorem ipsum dolor sit amet,</Col>
        </Row>
        <Row>
          <Col xs="3">consectetur adipiscing elit</Col>
          <Col xs="auto">consectetur adipiscing elit</Col>
          <Col xs="3">consectetur adipiscing elit</Col>
        </Row>
        <Row>
          <Col xs="6">consectetur adipiscing elit</Col>
          <Col xs="6">consectetur adipiscing elit</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">consectetur adipiscing elit</Col>
          <Col xs="6" sm="4">consectetur adipiscing elit</Col>
          <Col sm="4">.consectetur adipiscing </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>consectetur adipiscing elit</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>consectetur adipiscing elit</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>consectetur adipiscing elit</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>consectetur adipiscing elit</Col>
        </Row>
      </Container>
    );
  }
}
 