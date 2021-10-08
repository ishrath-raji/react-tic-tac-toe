import "../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Description from "./homeSubComponents/Description";
import RecentlyPlayed from "./homeSubComponents/RecentlyPlayed";
import Leaderboard from "./homeSubComponents/Leaderboard";
import Comments from "./homeSubComponents/Comments";

const App = () => {
  return (
    <div>
      <Container style={{ margin: 10 }} fluid={true}>
        <Row>
          <Col sm={7} md={7}>
            <Container>
              <Row>
                <Col className="intro" sm={12} md={12}>
                  <div className="intro box">
                    <Description />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="recently-played" sm={6} md={6}>
                  <div className="rp box">
                    <RecentlyPlayed />
                  </div>
                </Col>
                <Col className="comments" sm={6} md={6}>
                  <div className="comments box">
                    {" "}
                    <Comments />{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col className="leaderboard" sm={4} md={4}>
            <div className="lb box">
              <Leaderboard />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
