import React, { Component } from "react";
import "../App.css";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const style = {
  padding: "0 0 0 10%",
};

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: undefined,
      modalVisible: false,
      rounds: props.rounds,
      winnerModalVisible: false,
    };

    this.gameState = {
      turn: this.props.symbol,
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0,
      XWins: 0,
      OWins: 0,
      curRound: 1,
      winnerText: "",
    };
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  setWinnerModalVisible(winnerModalVisible) {
    this.setState({ winnerModalVisible });
    if (this.props.symbol === "X") {
      this.gameState.winnerText =
        this.gameState.XWins > this.gameState.OWins
          ? "You Won"
          : "Try Again Next time";
    } else if (this.props.symbol === "O") {
      this.gameState.winnerText =
        this.gameState.XWins < this.gameState.OWins
          ? "You Won"
          : "Try Again Next time";
    }
  }

  clicked(box) {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;

    if (this.gameState.board[box.dataset.square] === "") {
      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;
      box.style.color = this.gameState.turn === "X" ? "#ff615a" : "white";
      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
      this.props.turn(this.gameState.turn);
      this.gameState.totalMoves++;
    }

    var result = this.checkWinner();

    if (this.state.rounds !== this.gameState.curRound) {
      if (result === "X") {
        this.gameState.gameEnded = true;
        this.gameState.XWins++;
        this.setState({
          winner: "X",
          winnerLine: "Match won by X",
        });
        this.setModalVisible(true);
      } else if (result === "O") {
        this.gameState.gameEnded = true;
        this.gameState.OWins++;
        this.setState({
          winner: "O",
          winnerLine: "Match won by O",
        });
        this.setModalVisible(true);
      } else if (result === "draw") {
        this.gameState.gameEnded = true;
        this.setState({
          winner: "draw",
          winnerLine: "Match is drawn",
        });
        this.setModalVisible(true);
      }
    } else if (this.state.rounds === this.gameState.curRound) {
      if (result === "X") {
        this.gameState.gameEnded = true;
        this.gameState.XWins++;
        this.setState({
          winner: "X",
          winnerLine: "Match won by X",
        });
        this.setWinnerModalVisible(true);
      } else if (result === "O") {
        this.gameState.gameEnded = true;
        this.gameState.OWins++;
        this.setState({
          winner: "O",
          winnerLine: "Match won by O",
        });
        this.setWinnerModalVisible(true);
      } else if (result === "draw") {
        this.gameState.gameEnded = true;
        this.setState({
          winner: "draw",
          winnerLine: "Match is drawn",
        });
        this.setWinnerModalVisible(true);
      }
    }

    if (
      ((this.props.symbol === "X" && this.gameState.turn === "O") ||
        (this.props.symbol === "O" && this.gameState.turn === "X")) &&
      !this.gameState.gameEnded
    ) {
      this.gameState.gameLocked = true;
      setTimeout(() => {
        do {
          var random = Math.floor(Math.random() * 9);
        } while (this.gameState.board[random] !== "");
        this.gameState.gameLocked = false;
        this.clicked(document.querySelectorAll(".square")[random]);
        this.props.turn(this.props.symbol == "X" ? "0" : "X");
      }, 500);
    }
  }

  checkWinner() {
    var winConditions = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    var board = this.gameState.board;

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c])
        return board[a];
    }

    if (this.gameState.totalMoves === 9) {
      return "draw";
    }
  }

  clearBoard() {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll(".square")[i].innerText = "";
    }
  }

  continueClicked() {
    this.setModalVisible(false);
    this.gameState.board = Array(9).fill("");
    this.clearBoard();
    this.state.winnerLine = "";
    this.gameState.totalMoves = 0;
    this.gameState.gameEnded = false;
    this.gameState.turn = this.props.symbol;
    this.state.winnerLine = undefined;
    this.gameState.curRound++;
    this.props.turn(this.gameState.turn);
  }

  render() {
    return (
      <>
        <div id="game">
          {/* <div id="turn">{this.state.winnerLine}</div> */}
          <div id="turn">
            {this.state.winnerLine === undefined
              ? `ROUND ` + this.gameState.curRound
              : this.state.winnerLine}
          </div>
          <div id="board" onClick={(e) => this.clicked(e.target)}>
            <div className="square" data-square="0"></div>
            <div className="square" data-square="1"></div>
            <div className="square" data-square="2"></div>
            <div className="square" data-square="3"></div>
            <div className="square" data-square="4"></div>
            <div className="square" data-square="5"></div>
            <div className="square" data-square="6"></div>
            <div className="square" data-square="7"></div>
            <div className="square" data-square="8"></div>
          </div>
          <div id="score">
            <span id="p1-score" className="title-green">
              {this.gameState.XWins}
            </span>
            <span>-</span>
            <span id="p2-score" className="title-orange">
              {this.gameState.OWins}
            </span>
          </div>
          <div id="match-type">{this.state.rounds} ROUND MATCH</div>
        </div>
        <Modal
          centered
          visible={this.state.modalVisible}
          footer={null}
          height="728px"
          onCancel={() => this.setModalVisible(false)}
          className="modal2"
          closable={false}
          maskClosable={false}
        >
          <div className="results">
            <h3 className="winner-line">{this.state.winnerLine}</h3>
            <span className="pts-round">
              {" "}
              Points at the end of Round {this.gameState.curRound}{" "}
            </span>
            <div id="score">
              <span id="p1-score" className="title-green">
                {this.gameState.XWins}
              </span>
              <span>-</span>
              <span id="p2-score" className="title-orange">
                {this.gameState.OWins}
              </span>
            </div>
            <button
              className="continue-btn"
              onClick={() => {
                this.continueClicked();
              }}
            >
              Continue
            </button>
          </div>
        </Modal>
        <Modal
          centered
          visible={this.state.winnerModalVisible}
          footer={null}
          height="728px"
          onCancel={() => this.setWinnerModalVisible(false)}
          className="modal2"
          closable={false}
          maskClosable={false}
        >
          <div className="results">
            <h3 className="winner-line">{this.gameState.winnerText}</h3>
            <span className="pts-round"> Overall points </span>
            <div id="score">
              <span id="p1-score" className="title-green">
                {this.gameState.XWins}
              </span>
              <span>-</span>
              <span id="p2-score" className="title-orange">
                {this.gameState.OWins}
              </span>
            </div>
            <div className="buttons-box">
              <Link style={style} to="/gamehub/tictactoe">
                <button className="continue-btn">LEADBOARD</button>
              </Link>

              <Link style={style} to="/gamehub/tictactoe/play">
                <button className="continue-btn">REPLAY</button>
              </Link>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default GameBoard;
