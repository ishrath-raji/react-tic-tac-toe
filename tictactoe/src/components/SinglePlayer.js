import "../App.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import GameBoard from "../singlePlayerSubComponents/GameBoard";
import PlayerCard from "../singlePlayerSubComponents/PlayerCard";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";

const style = {
  display: "grid",
  gridTemplateColumns: " 1fr 1fr",
  gridColumnGap: "35px",
  justifyContent: "center",
  alignItems: "center",
};

class SinglePlayer extends React.Component {
  state = { playerTurn: "X" };

  playerTurn = (playturn) => {
    this.setState({ playturn: playturn });
    this.state.playerTurn = playturn;
  };

  render() {
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
                    <Link style={style} to="/gamehub/tictactoe/play">
                      <button className="orange">MENU</button>
                    </Link>
                    <Link style={style} to="/gamehub/tictactoe">
                      <button className="blue">EXIT</button>
                    </Link>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <PlayerCard turn={this.state.playerTurn} />
            </Col>
            <Col md={4}>
              <GameBoard turn={this.playerTurn} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SinglePlayer;
