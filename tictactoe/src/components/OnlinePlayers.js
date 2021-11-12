import React from "react";
import { players } from "./homeSubComponents/RecentlyPlayed";
import Player from "./homeSubComponents/Player";


const OnlinePlayers = () =>{
    const playerList = players.map((player,index) =>(<Player key={index} player={player}/>))
    return (
        <div className="recently-played-body">
            <div className="player-list" >{playerList}</div>
        </div>
    )
}

export default OnlinePlayers;

