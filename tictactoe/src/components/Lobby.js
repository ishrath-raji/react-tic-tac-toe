import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import OnlinePlayers from "./OnlinePlayers";
import logo from "../icons/tic-tac-toe-logo.png";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import SearchBar from "./SearchBar";
import ColleagueData from "../MOCK_DATA.json";

const Lobby = () => {
  const [rounds, setRounds] = useState("ROUNDS");

  const menu = (
    <Menu>
      <Menu.Item className="menu-item" onClick={() => setRounds("3")}>
        3
      </Menu.Item>
      <Menu.Item className="menu-item" onClick={() => setRounds("5")}>
        5
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Container style={{ margin: 10 }} fluid={true}>
        <Row>
          <Col md={6}>
            <div className="">
              <div className="menu-container">
                <div className="title">
                  <span className="title-green">Tic</span>-
                  <span className="title-orange">Tac</span>-
                  <span className="title-green">Toe</span>
                </div>
                <div className="title-logo">
                  <img src={logo} alt="tictactoe-logo" width="260px" />
                </div>
                <h2>Challenge a friend</h2>
                <div className="rounds-txt">NUMBER OF ROUNDS</div>
                <div>
                  <Dropdown
                    className="no-of-rounds"
                    overlay={menu}
                    placement="bottomCenter"
                  >
                    <Button>{rounds}</Button>
                  </Dropdown>
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
            </div>
          </Col>
          <Col md={5}>
            <Row>
            <div className="">
              <SearchBar
                placeholder="Search a colleague"
                data={ColleagueData}
              />
            </div>
            </Row>
            <Row>
              <OnlinePlayers />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lobby;
