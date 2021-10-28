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
    rate: 0,
  };

  setmodalVisible(modalVisible, event) {
    event.preventDefault();
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
        <h4>Comments & Review </h4>
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
                    onClick={(e) => this.setmodalVisible(true, e)}
                  />
                  <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={(e) => this.setmodalVisible(true, e)}
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
        <Modal
          centered
          visible={this.state.modalVisible}
          onOk={() => this.onClickOK(false)}
          okText="Post"
          width="728px"
          onCancel={(e) => this.setmodalVisible(false, e)}
          className="modal-comments"
        >
          <Row>
            <h3>Comments and Reviews</h3>
            <p />
          </Row>
          <Row>
            <Col xs={12} md={1}>
              <Avatar
                size={55}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="user_name"
              />
            </Col>
            <Col xs={6} md={6} className="user-name">
              <p>User Name</p>
            </Col>
          </Row>
          <Row className="row comment-popup-rate">
            <Rate
              enable
              allowHalf
              defaultValue={rate}
              onChange={this.handleRate}
              className="popup-rate"
            />
          </Row>
          <Row className="row comment-popup-text">
            <TextArea
              size="large"
              rows={7}
              onChange={this.handleChange}
              value={value}
              placeholder="Comment"
            />
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Comments;
