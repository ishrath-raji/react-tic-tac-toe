import "../../App.css";
import React from "react";
import { Rate } from "antd";
import logo from "../../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="intro-container">
      <div className="logo">
        <img src={logo} alt="tictactoe-logo" width="300px" />
      </div>

      <div className="game-title">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className="game-description">
        <p>
          Compete against your colleagues in a classic game of tic-tac-toe.
          Climb up the leaderboard and win exciting badges!!!
        </p>
      </div>
      <div className="tags">
        <ul className="tag-list">
          <li>tag 1 </li>
          <li>tag 2 </li>
          <li>tag 3 </li>
        </ul>
      </div>
      <div className="rating">
        <div className="rating-value">4.9</div>
        <Rate disabled allowHalf defaultValue={4.5} />
        <Link to="/gamehub/tictactoe/play">
          <button className="play-button">PLAY</button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
