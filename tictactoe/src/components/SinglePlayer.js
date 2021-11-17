import "../App.css";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import GameBoard from "./singlePlayerSubComponents/GameBoard";
import PlayerCard from "./singlePlayerSubComponents/PlayerCard";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";

const SinglePlayer = (props) => {
  const [playerTurn, setPlayerTurn] = useState("X");

  const ChangeplayerTurn = (playturn) => {
    setPlayerTurn(playturn);
  };

  const { location } = props;

  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col md={4}>
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
                <Row className="gap">
                  <Link to="/gamehub/tictactoe/play">
                    <button className="orange">MENU </button>
                  </Link>
                  <Link to="/gamehub/tictactoe">
                    <button className="blue">EXIT </button>
                  </Link>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <PlayerCard turn={playerTurn} symbol={props.symbol} isMultiplayer={false} />
          </Col>
          <Col md={4}>
            <GameBoard
              turn={ChangeplayerTurn}
              symbol={location.symbol}
              rounds={location.rounds}
              difficulty={location.difficulty}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// }

export default SinglePlayer;
