import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import GameBoard from "./singlePlayerSubComponents/GameBoard";
import PlayerCard from "./singlePlayerSubComponents/PlayerCard";

const MultiPlayer = () => {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [modalVisible, setModalVisible] = useState(false);

  const ChangeplayerTurn = (playturn) => {
    setPlayerTurn(playturn);
  };

  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col md={4}>
            <PlayerCard isMultiplayer={true} playerNo={1} />
          </Col>
          <Col md={4}>
            <div className="title">
              <span className="title-green">Tic</span>-
              <span className="title-orange">Tac</span>-
              <span className="title-green">Toe</span>
            </div>
            <div className="mp-gameboard">
              <GameBoard
                rounds={3}
                symbol={"X"}
                difficulty={"easy"}
                turn={ChangeplayerTurn}
              />
            </div>
          </Col>
          <Col md={4}>
            <PlayerCard isMultiplayer={true} playerNo={2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MultiPlayer;
