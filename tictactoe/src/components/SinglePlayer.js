import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import GameBoard from "../singlePlayerSubComponents/GameBoard";

const style = {
  border: "1px solid black",
};

const SinglePlayer = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col style={style} md={4}>
            Logo
          </Col>
          <Col style={style} md={4}>
            Player Info
          </Col>
          <Col style={style} md={4}>
            <GameBoard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SinglePlayer;
