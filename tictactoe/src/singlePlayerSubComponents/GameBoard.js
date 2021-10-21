import React, { Component } from "react";
import "../App.css";

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      winner: undefined,
    };
    this.gameState = {
      turn: "X",
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0,
      XWins: 0,
      OWins: 0,
    };
  }

  clicked(box) {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;

    if (this.gameState.board[box.dataset.square] === "") {
      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;
      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
      this.gameState.totalMoves++;
    }

    // console.log(this.gameState.totalMoves);

    var result = this.checkWinner();

    if (result === "X") {
      this.gameState.gameEnded = true;
      this.gameState.XWins++;
      this.setState({
        winner: "X",
        winnerLine: "Match won by X",
      });
    } else if (result === "O") {
      this.gameState.gameEnded = true;
      this.gameState.OWins++;
      this.setState({
        winner: "O",
        winnerLine: "Match won by O",
      });
    } else if (result === "draw") {
      this.gameState.gameEnded = true;
      this.setState({
        winner: "draw",
        winnerLine: "Match is drawn",
      });
    }

    if (this.gameState.turn === "O" && !this.gameState.gameEnded) {
      this.gameState.gameLocked = true;
      setTimeout(() => {
        do {
          var random = Math.floor(Math.random() * 9);
        } while (this.gameState.board[random] !== "");
        this.gameState.gameLocked = false;
        this.clicked(document.querySelectorAll(".square")[random]);
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

    console.log(this.gameState.totalMoves);
    if (this.gameState.totalMoves === 9) {
      return "draw";
    }
  }
  render() {
    return (
      <div id="game">
        {/* <div id="status">{this.state.winnerLine}</div> */}
        <div id="turn">
          {this.state.winnerLine === undefined
            ? this.gameState.turn === "X"
              ? "X's turn"
              : "O's turn"
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
        <div id="match-type">5 ROUND MATCH</div>
      </div>
    );
  }
}

export default GameBoard;
