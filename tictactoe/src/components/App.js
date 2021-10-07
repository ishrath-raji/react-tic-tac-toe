import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <h1>MY APP NOWWWWWWW</h1>
      <Container>
        <Row>
          <Col sm={8}>Intro</Col>
          <Col sm={4}>Leaderboard</Col>
        </Row>
        <Row>
          <Col sm>Recently Played</Col>
          <Col sm>Comments and Reviews </Col>
          <Col sm>......</Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
