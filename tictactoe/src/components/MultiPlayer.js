import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const style = {
  border: "1px solid black",
};

const MultiPlayer = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col md={4} style={style}>
            1st player card
          </Col>
          <Col md={4} style={style}>
            Game board
          </Col>
          <Col md={4} style={style}>
            2nd player card
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MultiPlayer;
