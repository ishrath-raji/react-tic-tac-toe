import React from "react";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link, Redirect } from "react-router-dom";
import { Modal, Row, Radio } from "antd";
import SinglePlayer from "./SinglePlayer";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

var difficulty = false;
var playerSymbol = false;

function redirectingPage() {
  <Redirect to="/gamehub/tictactoe/play/singleplayer"></Redirect>;
}

class Menu extends React.Component {
  state = {
    modalVisible: false,
    onDifficulty: false,
    onPlayer: false,
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  setDifficulty(onDifficulty) {
    this.setState({ onDifficulty: onDifficulty });
    console.log("true diff");
  }

  setSymbol(onPlayer) {
    this.setState({ onPlayer: onPlayer });
    console.log("true player");
  }

  Clicked(button) {
    if (button === "easy" || button === "hard") {
      difficulty = true;
    }
    if (button === "X" || button === "O") {
      playerSymbol = true;
    }

    if (playerSymbol && difficulty) {
      console.log("all true");
      redirectingPage();
    }
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
            className="modal single-player"
          >
            <div>
              <Row>
                <h5 className="modal-title">SELECT DIFFICULTY LEVEL</h5>
              </Row>
              <Row className="row button">
                <Radio.Group
                  onChange={() => {
                    this.setDifficulty(true);
                  }}
                >
                  {/* <Col className="col button left"> */}
                  <Radio.Button
                    value="easy"
                    className="button difficulty easy"
                    onClick={() => {
                      this.Clicked("easy");
                    }}
                  >
                    Easy
                  </Radio.Button>
                  {/* <Col className="col button"> */}
                  <Radio.Button
                    value="hard"
                    className="button difficulty hard"
                    onClick={() => {
                      this.Clicked("hard");
                    }}
                  >
                    Hard
                  </Radio.Button>
                </Radio.Group>
              </Row>
              <Row>
                <h5 className="modal-title">SELECT SYMBOL</h5>
              </Row>
              <Row className="row button">
                <Radio.Group
                  onChange={() => {
                    this.setSymbol(true);
                  }}
                >
                  {/* <Col className="col button left"> */}

                  <Radio.Button
                    value="X"
                    className="button symbol X"
                    onClick={() => {
                      this.Clicked("X");
                    }}
                  >
                    X
                  </Radio.Button>
                  {/* <Col className="col button"> */}

                  <Radio.Button
                    value="O"
                    className="button symbol O"
                    onClick={() => {
                      this.Clicked("O");
                    }}
                  >
                    O
                  </Radio.Button>
                </Radio.Group>
              </Row>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
