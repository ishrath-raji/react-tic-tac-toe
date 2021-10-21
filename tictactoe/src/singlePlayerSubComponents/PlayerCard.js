import "../App.css";
import React from "react";
import {Card, Avatar} from "antd";

const style = {
    width: 300 ,
    height: 350,
    paddingLeft: 70    
    }


const PlayerCard = () => {

    // need to use useffect 
    return (
       <div className="player-card">
            <Card style={style}>
            <p>Player Content</p>
            <p></p>
            <p></p>
            </Card>
       </div>
    )
}

export default PlayerCard;