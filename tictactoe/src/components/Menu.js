import React from "react";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";
import { Modal, Row, Col } from "antd";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

class Menu extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <div className="menu-container">
        <div className="title">
          <span className="title-green">Tic</span>-
          <span className="title-orange">Tac</span>-
          <span className="title-green">Toe</span>
        </div>
        <div className="title-logo">
          <img src={logo} alt="tictactoe-logo" width="260px" />
        </div>
        <div className="menu-list">
          <button className="orange" onClick={() => this.setModalVisible(true)}>
            SINGLE PLAYER
          </button>
          <Link style={style} to="/gamehub/tictactoe/play">
            <button className="blue">MULTI PLAYER</button>
          </Link>
          <Link style={style} to="/gamehub/tictactoe/play">
            <button className="orange">OPTIONS</button>
          </Link>
          <Link style={style} to="/gamehub/tictactoe">
            <button className="blue">EXIT</button>
          </Link>

          <Modal
            centered
            visible={this.state.modalVisible}
            footer={null}
            width="728px"
            onCancel={() => this.setModalVisible(false)}
          >
            <div>
              <Row>
                <h5 className="modal-title">SELECT DIFFICULTY LEVEL</h5>
              </Row>
              <Row className="row button">
                <Col className="col button left">
                  <Link to="/gamehub/tictactoe/play/singleplayer">
                    <button className="button difficulty easy">Easy</button>
                  </Link>
                </Col>
                <Col className="col button">
                  <button className="button difficulty hard">Hard</button>
                </Col>
              </Row>
              <Row>
                <h5 className="modal-title">SELECT SYMBOL</h5>
              </Row>
              <Row className="row button">
                <Col className="col button left">
                  <Link to="/gamehub/tictactoe/play/singleplayer">
                    <button className="button symbol X">X</button>
                  </Link>
                </Col>
                <Col className="col button">
                  <button className="button symbol O">O</button>
                </Col>
              </Row>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
