import React from "react";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="title">
        <span className="title-green">Tic</span>-
        <span className="title-orange">Tac</span>-
        <span className="title-green">Toe</span>
      </div>
      <div className="title-logo"></div>
      <div className="menu-list">
        <button className="sp-btn orange">SINGLE PLAYER</button>
        <button className="mp-btn blue">MULTI PLAYER</button>
        <button className="opt-btn orange">OPTIONS</button>
        <button className="exit-btn blue">EXIT</button>
      </div>
    </div>
  );
};

export default Menu;
