import "../../App.css";
import { Avatar, Input, Rate } from "antd";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Popup from "reactjs-popup";

const { TextArea } = Input;

class CommentPopup extends React.Component {
  state = {
    rate: 0,
    comment: "",
    submitting: false,
    popupData: [],
  };

  handleRate = (value) => {
    console.log(value);
    this.setState({ rate: value });
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      submitting: true,
    });

    this.setState({
      popupData: [
        {
          rateValue: this.state.rate,
          feedback: this.state.comment,
        },
      ],
    });
    this.props.handlePopupData(this.state.popupData);
  };

  render() {
    const { rate, comment, submitting } = this.state;
    return (
      <Popup
        trigger={<Input className="input-text" placeholder="Comment" />}
        modal
        nested
      >
        {(close) => (
          <div className="popup">
            <Container>
              <Row>
                <h1>Comments & Review</h1>
              </Row>
              <Row>
                <Col sm={1}>
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="user_name"
                  />
                </Col>
                <Col className="popup-col" sm={11}>
                  <h4>User Name</h4>
                </Col>
              </Row>
              <Row>
                <Rate
                  enable
                  allowHalf
                  style={{
                    fontSize: 33,
                    marginLeft: "10%",
                  }}
                  onChange={this.handleRate}
                  value={rate}
                />
              </Row>
              <Row>
                <div>
                  <form>
                    <TextArea
                      rows={7}
                      className="input-text"
                      placeholder="Comment"
                      style={{
                        marginTop: "3%",
                        width: "100%",
                        border: "1px solid #cbc4c2",
                      }}
                      onChange={this.handleCommentChange}
                      value={comment}
                    />
                  </form>
                </div>
              </Row>
              <Row>
                <Button
                  style={{
                    margin: "2% 2%",
                    width: "96%",
                    backgroundColor: "#de5b59",
                    border: "none",
                  }}
                  htmlType="submit"
                  loading={submitting}
                  onClick={(this.handleSubmit, close)}
                  className="comment-button"
                >
                  Post
                </Button>
              </Row>
            </Container>
          </div>
        )}
      </Popup>
    );
  }
}

export default CommentPopup;
