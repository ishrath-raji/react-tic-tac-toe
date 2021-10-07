import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <h1>MY APP NOWWWWWWW</h1>
      <Container fluid>
        <Row>
          <Col style={{ border: "1px solid black" }} sm={8}>
            Intro
          </Col>
          <Col style={{ border: "1px solid black"}} sm={4} >
            LeaderBoard
          </Col>
        </Row>
        <Row>
          <Col style={{ border: "1px solid black" }} sm={4}>
            Recently Played
          </Col>
          <Col style={{ border: "1px solid black" }} sm={4}>
            Comments and Reviews{" "}
          </Col>
          
          
        </Row>
      </Container>
    </div>
  );
};

export default App;
