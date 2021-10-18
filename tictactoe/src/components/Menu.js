import React from "react";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Menu = () => {
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
        <Link style={style} to="/gamehub/tictactoe/play/singleplayer">
          <button className="orange">SINGLE PLAYER</button>
        </Link>
        <Link style={style} to="/gamehub/tictactoe/play">
          <button className="blue">MULTI PLAYER</button>
        </Link>
        <Link style={style} to="/gamehub/tictactoe/play">
          <button className="orange">OPTIONS</button>
        </Link>
        <Link style={style} to="/gamehub/tictactoe">
          <button className="blue">EXIT</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
