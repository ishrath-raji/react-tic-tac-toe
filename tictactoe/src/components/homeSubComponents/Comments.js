/* eslint-disable react/jsx-pascal-case */
import "../../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar, Button, Input, Rate } from "antd";

const CommentList = ({ comments }) => {
  const listItems = comments.map((comment) => {
    return (
      <Container key={comment.author}>
        <Row className="row comment">
          <Col className="col-box comment avatar" xs={10} md={2}>
            <Avatar src={comment.avatar} />
          </Col>
          <Col className="col-box" xs={6} md={10}>
            <div>
              <b>{comment.author}</b> {comment.rate}
              <br />
              {comment.content}
            </div>
          </Col>
        </Row>
      </Container>
    );
  });

  return <React.Fragment>{listItems}</React.Fragment>;
};

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
    commentListHeight: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.setState({
      submitting: false,
      value: "",
      comments: [
        ...this.state.comments,
        {
          author: "User name",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{this.state.value}</p>,
          rate: <Rate disabled allowHalf defaultValue={4.5} />,
        },
      ],
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div className="comment-body">
        <h3>Comments & Review </h3>
        <Container style={{ padding: "0%" }}>
          <Row style={{ marginLeft: "0%", marginRight: "0%" }}>
            <Col className="col-box avatar" xs={10} md={2}>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="user_name"
              />
            </Col>
            <Col className="col-box text" xs={6} md={10}>
              <form>
                <div className="input-type-box">
                  <Input
                    className="input-text"
                    onChange={this.handleChange}
                    value={value}
                    placeholder="Comment"
                  />
                  <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={this.handleSubmit}
                    className="comment-button"
                  >
                    Post
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
          <Row className="row comment-list">
            <CommentList comments={comments} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comments;