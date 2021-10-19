/* eslint-disable react/jsx-pascal-case */
import "../../App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar, Button, Rate } from "antd";
import CommentPopup from "./CommentPopup";

const CommentList = ({ comments }) => {
  const listItems = comments.map((comment) => {
    return <div>{comments.lenght}</div>;
    // return (
    //   <Container key={comment.author}>
    //     <Row className="row comment">
    //       <Col className="col-box comment avatar" xs={10} md={2}>
    //         <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    //       </Col>
    //       <Col className="col-box" xs={6} md={10}>
    //         <div>
    //           <b>name</b> 4.5
    //           <br />
    //           <p>well dome</p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // );
  });

  return <React.Fragment>{console.log(comments.lenght)}</React.Fragment>;
};

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
    popupData: [],
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!this.state.value) {
  //     return;
  //   }

  //   this.setState({
  //     submitting: true,
  //   });

  //   this.setState({
  //     submitting: false,
  //     value: "",
  //     comments: [
  //       ...this.state.comments,
  //       {
  //         author: "User name",
  //         avatar:
  //           "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  //         content: <p>{this.state.value}</p>,
  //         rate: <Rate disabled allowHalf defaultValue={4.5} />,
  //       },
  //     ],
  //   });
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  handlePopupData = (popupData) => {
    this.state.popupData = popupData;

    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.setState({
      submitting: false,
      comments: [
        ...this.state.comments,
        {
          author: "User name",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: this.state.popupData.feedback,
          rate: (
            <Rate
              disabled
              allowHalf
              defaultValue={this.state.popupData.rateValue}
            />
          ),
        },
      ],
    });
    this.state.comments.author = "User name";
    this.state.comments.avatar =
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    this.state.comments.content = this.state.popupData.feedback;
    this.state.comments.rate = this.state.popupData.rateValue;
  };

  render() {
    const { comments } = this.state;
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
                  <CommentPopup handlePopupData={this.handlePopupData} />
                  <Button className="comment-button">Post</Button>
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
