import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <h1>MY APP NOWWWWWWW</h1>
      <Container>
        <Row>
          <Col style={{ border: "1px solid black" }} sm={8}>
            Intro
          </Col>
          <Col style={{ border: "1px solid black" }} sm={4}>
            Leaderboard
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "1px solid black" }} sm>
            Recently Played
          </Col>
          <Col style={{ border: "1px solid black" }} sm>
            Comments and Reviews{" "}
          </Col>
          <Col style={{ border: "1px solid black" }} sm>
            ......
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
