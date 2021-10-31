import React, { useState } from "react";
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

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [onDifficulty, setOnDifficulty] = useState(false);
  const [onSymbol, setOnSymbol] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [symbol, setSymbol] = useState("");

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
        <button className="orange" onClick={() => setModalVisible(true)}>
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
          visible={modalVisible}
          footer={null}
          width="728px"
          onCancel={() => this.setmodalVisible(false)}
          className="modal single-player"
        >
          <div>
            <Row>
              <h5 className="modal-title">SELECT DIFFICULTY LEVEL</h5>
            </Row>
            <Row className="row button">
              <Radio.Group
                onChange={() => {
                  setOnDifficulty(true);
                }}
              >
                <Radio.Button
                  value="easy"
                  className="button difficulty easy"
                  onClick={(e) => setDifficulty(e.target.value)}
                >
                  Easy
                </Radio.Button>
                <Radio.Button
                  value="hard"
                  className="button difficulty hard"
                  onClick={(e) => setDifficulty(e.target.value)}
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
                onChange={(e) => {
                  setOnSymbol(true);
                }}
              >
                <Radio.Button
                  value="X"
                  className="button symbol X"
                  onClick={(e) => setSymbol(e.target.value)}
                >
                  X
                </Radio.Button>{" "}
                <Radio.Button
                  value="O"
                  className="button symbol O"
                  onClick={(e) => setSymbol(e.target.value)}
                >
                  O
                </Radio.Button>{" "}
              </Radio.Group>
            </Row>
            <Row>
              <h5 className="modal-title">SELECT NUMBER OF ROUNDS</h5>
            </Row>
            <Row className="row button">
              <Radio.Group>
                <Link
                  to={{
                    pathname:
                      onDifficulty && onSymbol
                        ? "/gamehub/tictactoe/play/singleplayer"
                        : "/gamehub/tictactoe/play",
                    symbol: symbol,
                    difficulty: difficulty,
                    rounds: 3,
                  }}
                >
                  <Radio.Button value="X" className="button rounds three">
                    3
                  </Radio.Button>{" "}
                </Link>
                <Link
                  to={{
                    pathname:
                      onDifficulty && onSymbol
                        ? "/gamehub/tictactoe/play/singleplayer"
                        : "/gamehub/tictactoe/play",
                    symbol: symbol,
                    difficulty: difficulty,
                    rounds: 5,
                  }}
                >
                  <Radio.Button value="O" className="button rounds five">
                    5
                  </Radio.Button>{" "}
                </Link>
              </Radio.Group>
            </Row>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;
