import React from "react";
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const App = () => {
  return <div>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col> 1 of 3</Col>
        <Col> 2 of 3</Col>
        <Col> 3 of 3</Col>
      </Row>
    </Container></div>;
};

export default App;
