import ".../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Comment, Avatar, Button, List, Input, Rate } from "antd";

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.value);
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
          rate: <Rate disable allowHalf defaultValue={4} />,
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
        <Container style={{ padding: "0" }}>
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
          <Row className="comment-list">
            <CommentList comments={comments} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comments;
