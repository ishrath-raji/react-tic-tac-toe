import "../App.css";
import React from "react";
import {Avatar} from "antd";
import {Row, Container} from "react-bootstrap";


const PlayerCard = () => {

    // need to use useffect 
    return (
       <div className="player-card-container">
            <div className="player-card">
                
               <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width="125"/>
                <h4>Aishan Bamunawita</h4>
                <p>Senior HR Executive </p>
                <p>tag 1 tag 2</p>
                <p> active</p>
              </div>
       </div>
    )
}

export default PlayerCard;