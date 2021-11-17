import React from 'react';
import Player from './Player';
import "../App";
import players from "../../persondata.json";

const RecentlyPlayed = () => {

    const playerList = players.map((player,index) =>(<Player key={index} player={player}/>))
    return (
        <div className="recently-played-body">
            <h4>Recently Played</h4>
            <div className="player-list" >{playerList}</div>
        </div>
    )
}

export default RecentlyPlayed;
