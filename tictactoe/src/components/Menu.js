import React from "react";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";
import { Modal, Row, Radio } from "antd";

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
    onDifficulty: false,
    difficulty: "",
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  setDifficulty(onDifficulty) {
    this.setState({ onDifficulty: onDifficulty });
  }

  selectDifficulty(event) {
    console.log(event.target.value);
    this.state.difficulty = event.target.value;
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
                  <Radio.Button
                    value="easy"
                    className="button difficulty easy"
                    onClick={(e) => this.selectDifficulty(e)}
                  >
                    Easy
                  </Radio.Button>
                  <Radio.Button
                    value="hard"
                    className="button difficulty hard"
                    onClick={(e) => this.selectDifficulty(e)}
                  >
                    Hard
                  </Radio.Button>
                </Radio.Group>
              </Row>
              <Row>
                <h5 className="modal-title">SELECT SYMBOL</h5>
              </Row>
              <Row className="row button">
                <Radio.Group>
                  <Link
                    to={{
                      pathname: this.state.onDifficulty
                        ? "/gamehub/tictactoe/play/singleplayer"
                        : "/gamehub/tictactoe/play",
                      symbol: "X",
                      difficulty: this.state.difficulty,
                    }}
                  >
                    <Radio.Button value="X" className="button symbol X">
                      X
                    </Radio.Button>{" "}
                  </Link>
                  <Link
                    to={{
                      pathname: this.state.onDifficulty
                        ? "/gamehub/tictactoe/play/singleplayer"
                        : "/gamehub/tictactoe/play",
                      symbol: "O",
                      difficulty: this.state.difficulty,
                    }}
                  >
                    <Radio.Button value="O" className="button symbol O">
                      O
                    </Radio.Button>{" "}
                  </Link>
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
