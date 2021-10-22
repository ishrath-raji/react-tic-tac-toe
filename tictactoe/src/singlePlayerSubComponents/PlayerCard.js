import "../App.css";
import React from "react";
import {Avatar} from "antd";
import {Row, Container} from "react-bootstrap";


const PlayerCard = () => {

    // need to use useffect 
    return (
       <div className="player-card-container">
            <div className="player-card">
                
               <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width="110"/>
                <h5>Aishan Bamunawita</h5>
                Senior HR Executive <br/>
                tag 1 tag 2<br/>
                active<br/>
              </div>
       </div>
    )
}

export default PlayerCard;