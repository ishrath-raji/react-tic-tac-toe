import React from "react";
import {Col,Row} from "react-bootstrap";
import {Avatar} from "antd";


function OnlinePlayers ({player}){
   return (
        <div className="online-player-content">
           <Row className="player-row">
                <Col md={1}><Avatar src={player.src}/></Col>
                <Col md={8}>
                    <h6>{player.name}</h6>
                    <div className="activity-status">{player.status}</div>
                </Col>
                <Col md={3} className={`activity ${player.status === 'online'? "activity-status":""}`}>{player.status}</Col>
            </Row>
        </div>
    )
}

export default OnlinePlayers;

