import React, { useState, useEffect } from "react";
import "../App.css";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const GameBoard = (props) => {
  const [winner, setWinner] = useState(undefined);
  const [winnerLine, setWinnerLine] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [rounds, setRounds] = useState(props.rounds);
  const [winnerModalVisible, setWinnerModalVisible] = useState(false);

  const [turn, setTurn] = useState(props.symbol);
  const [gameLocked, setGameLocked] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [totalMoves, setTotalMoves] = useState(1);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [curRound, setCurRound] = useState(1);
  const [winnerText, setWinnerText] = useState("");

  const setWinnerModalVisibility = (winnerModalVisible) => {
    setWinnerModalVisible(winnerModalVisible);
    if (props.symbol === "X") {
      setWinnerText(xWins > oWins ? "You Won!" : "Try Again Next Time");
    } else if (props.symbol === "O") {
      setWinnerText(xWins < oWins ? "You Won!" : "Try Again Next Time");
    }
  };

  useEffect(() => {
    if (
      ((props.symbol === "X" && turn === "O") ||
        (props.symbol === "O" && turn === "X")) &&
      !gameEnded
    ) {
      setGameLocked(true);
      setTimeout(() => {
        do {
          var random = Math.floor(Math.random() * 9);
        } while (board[random] !== "");
        setGameLocked(false);
        clicked(document.querySelectorAll(".square")[random]);
        props.turn(props.symbol === "X" ? "O" : "X");
      }, 500);
    }
  }, [turn]);

  const clicked = (box) => {
    if (gameEnded || gameLocked) return;

    if (board[box.dataset.square] === "") {
      board[box.dataset.square] = turn;
      box.innerText = turn;
      box.style.color = turn === "X" ? "#ff615a" : "white";
      setTurn(turn === "X" ? "O" : "X");
      props.turn(turn);
      setTotalMoves(totalMoves + 1);
    }

    var result = checkWinner();
    console.log(result);

    if (rounds !== curRound) {
      if (result === "X") {
        setGameEnded(true);
        setXWins(xWins + 1);
        setWinner("X");
        setWinnerLine("Match won by X");
        setModalVisible(true);
      } else if (result === "O") {
        setGameEnded(true);
        setOWins(oWins + 1);
        setWinner("O");
        setWinnerLine("Match won by O");
        setModalVisible(true);
      } else if (result === "draw") {
        setGameEnded(true);
        setWinner("draw");
        setWinnerLine("Match is drawn");
        setModalVisible(true);
      }
    } else if (rounds === curRound) {
      if (result === "X") {
        setGameEnded(true);
        setXWins(xWins + 1);
        setWinner("X");
        setWinnerLine("Match won by X");
        setWinnerModalVisibility(true);
      } else if (result === "O") {
        setGameEnded(true);
        setOWins(oWins + 1);
        setWinner("O");
        setWinnerLine("Match won by O");
        setWinnerModalVisibility(true);
      } else if (result === "draw") {
        setGameEnded(true);
        setWinner("draw");
        setWinnerLine("Match is drawn");
        setWinnerModalVisibility(true);
      }
    }
  };

  const checkWinner = () => {
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
    // var board = this.gameState.board;
    var curboard = board;

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        curboard[a] &&
        curboard[a] === curboard[b] &&
        curboard[b] === curboard[c]
      )
        return curboard[a];
    }
    console.log(totalMoves);
    if (totalMoves === 8) {
      return "draw";
    }
  };

  const clearBoard = () => {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll(".square")[i].innerText = "";
    }
  };

  const continueClicked = () => {
    setModalVisible(false);
    setBoard(Array(9).fill(""));
    clearBoard();
    setWinnerLine("");
    setTotalMoves(0);
    setGameEnded(false);
    setTurn(props.symbol);
    setWinnerLine(undefined);
    setCurRound(curRound + 1);
    props.turn(turn);
  };

  return (
    <>
      <div id="game">
        <div id="turn">
          {winnerLine === undefined ? `ROUND ${curRound}` : winnerLine}
        </div>
        <div id="board" onClick={(e) => clicked(e.target)}>
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
            {xWins}
          </span>
          <span>-</span>
          <span id="p2-score" className="title-orange">
            {oWins}
          </span>
        </div>
        <div id="match-type">{rounds} ROUND MATCH</div>
      </div>
      <Modal
        centered
        visible={modalVisible}
        footer={null}
        height="728px"
        onCancel={() => setModalVisible(false)}
        className="modal2"
        closable={false}
        maskClosable={false}
      >
        <div className="results">
          <h3 className="winner-line">{winnerLine}</h3>
          <span className="pts-round">
            {" "}
            Points at the end of Round {curRound}{" "}
          </span>
          <div id="score">
            <span id="p1-score" className="title-green">
              {xWins}
            </span>
            <span>-</span>
            <span id="p2-score" className="title-orange">
              {oWins}
            </span>
          </div>
          <button className="continue-btn" onClick={continueClicked}>
            Continue
          </button>
        </div>
      </Modal>
      <Modal
        centered
        visible={winnerModalVisible}
        footer={null}
        height="728px"
        onCancel={() => setWinnerModalVisible(false)}
        className="modal2"
        closable={false}
        maskClosable={false}
      >
        <div className="results">
          <h3 className="winner-line">{winnerText}</h3>
          <span className="pts-round"> Overall Points </span>
          <div id="score">
            <span id="p1-score" className="title-green">
              {xWins}
            </span>
            <span>-</span>
            <span id="p2-score" className="title-orange">
              {oWins}
            </span>
          </div>
          <div className="buttons-box">
            <Link to="/gamehub/tictactoe">
              <button className="continue-btn">LEADBOARD</button>
            </Link>

            <Link to="/gamehub/tictactoe/play">
              <button className="continue-btn">REPLAY</button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GameBoard;
