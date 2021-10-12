import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Leaderboard from "./homeSubComponents/Leaderboard";
import Menu from "./Menu";

const Play = () => {
  return (
    <div>
      <Container style={{ margin: 10 }} fluid={true}>
        <Row>
          <Col md={6}>
            <Menu />
          </Col>
          <Col md={5}>
            <div className="leaderboard">
              <Leaderboard />
              <Link to="/gamehub/tictactoe">
                <button>back</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Play;
