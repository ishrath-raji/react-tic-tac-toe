import "../../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar, Button, Input, Rate, Modal } from "antd";

const { TextArea } = Input;

const CommentList = ({ comments }) => {
  const listItems = comments.map((comment) => {
    return (
      <Container key={comment.content}>
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
    modalVisible: false,
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  onClickOK = (modalVisible) => {
    this.setState({ modalVisible });

    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.setState({
      submitting: false,
      value: "",
      rate: 0,
      comments: [
        ...this.state.comments,
        {
          author: "User name",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{this.state.value}</p>,
          rate: <Rate disabled allowHalf defaultValue={this.state.rate} />,
        },
      ],
    });
  };

  handleRate = (e) => {
    this.setState({
      rate: e,
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value, rate } = this.state;
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
                    readOnly
                    placeholder="Comment"
                    onClick={() => this.setModalVisible(true)}
                  />
                  <Modal
                    title={<h3>Comments and Reaviews</h3>}
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.onClickOK(false)}
                    onCancel={() => this.setModalVisible(false)}
                    okText="Post"
                  >
                    <Container>
                      <Row>
                        <Col xs={12} md={1}>
                          <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="user_name"
                          />
                        </Col>
                        <Col xs={6} md={6}>
                          User Name
                        </Col>
                      </Row>
                      <Row>
                        <Rate
                          enable
                          allowHalf
                          defaultValue={rate}
                          onChange={this.handleRate}
                        />
                      </Row>
                      <Row>
                        <TextArea
                          rows={7}
                          onChange={this.handleChange}
                          value={value}
                          placeholder="Comment"
                        />
                      </Row>
                    </Container>
                  </Modal>
                  <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={this.onClickOK}
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
