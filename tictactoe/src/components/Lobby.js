import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Notification from "./Notification";

const Lobby = () => {
  return (
    <div>
      <Container style={{ margin: 10 }} fluid={true}>
        <Row>
          <Col md={6}>
            <div className="">left-hand side components</div>
          </Col>
          <Col md={5}>
            <div className="">
              <Notification />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lobby;
