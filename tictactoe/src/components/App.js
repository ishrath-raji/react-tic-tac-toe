import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const App = () => {
  return (
    <div>
      <Container style={{ margin: 10 }} fluid={true}>
        <Row>
          <Col sm={6} md={7}>
            <Container>
              <Row>
                <Col className="intro" sm={12} md={12}>
                <div className="intro box">TIC-TAC-TOE</div>
                </Col>
              </Row>
              <Row>
                <Col className="recently-played" sm={6} md={6}>
                  <div className="rp box">Recently Played</div>
                </Col>
                <Col className="comments" sm={6} md={6}>
                  <div className="comments box"> Comments and Reviews </div>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col className="leaderboard" sm={5} md={4}>
          <div className="lb box">Leaderboard</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
