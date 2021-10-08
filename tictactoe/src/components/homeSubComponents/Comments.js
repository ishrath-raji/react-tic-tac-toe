import "./comment.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Comments = () => {
  return (
    <div className="comment-body">
      <h3>Comments & Review </h3>
      <Container style={{ padding: "0" }}>
        <Row style={{ marginLeft: "0%", marginRight: "0%" }}>
          <Col className="col-box avatar" xs={10} md={2}>
            <svg
              width="45"
              height="45"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25.5" cy="25.5" r="25.5" fill="#C4C4C4" />
            </svg>
          </Col>
          <Col className="col-box text" xs={6} md={10}>
            <form>
              <div className="input-type-box">
                <input type="text" className="input-text"></input>
                <button className="button">Post</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
