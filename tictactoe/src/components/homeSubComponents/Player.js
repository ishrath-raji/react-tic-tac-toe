import React from "react";
import {Col,Row} from "react-bootstrap";
import {Avatar} from "antd";
import "../App"

function Player({player}){
    return (
        <div className="player-content">
           
            <Row>
                <Col md={2}><Avatar src={player.src}/></Col>
                <Col md={7}><h6>{player.name}</h6></Col>
                <Col md={3}>{player.status}</Col>
            </Row>
        </div>
    )
}



export default Player;