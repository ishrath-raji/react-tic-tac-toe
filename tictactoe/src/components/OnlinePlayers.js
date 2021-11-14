import React from "react";
import {Col,Row} from "react-bootstrap";
import {Avatar} from "antd";


const OnlinePlayers = (player) =>{
   return (
        <div className="online-player-content">
           <Row className="player-row">
                <Col md={1}><Avatar src={player.src}/></Col>
                <Col md={8}>
                    <h6>Hi</h6>
                    <div className="green-text">Online</div>
                </Col>
                <Col md={3} className={`activity ${player.status === 'online'? "activity-status":""}`}> test3 </Col>
            </Row>
        </div>
    )
}

export default OnlinePlayers;

