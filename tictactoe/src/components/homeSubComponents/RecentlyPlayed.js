import React from 'react';
import Player from './Player';
import "../App";


const players =[
    {
        name:'Achini Rathnayake',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Anura Adhikari',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aravinthan Ramaraju',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Mohamed Shaffy',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }
    
]
const RecentlyPlayed = () => {

    const playerList = players.map(player =>(<Player player={player}/>))
    return (
        <div className="recently-played-body">
            <h3>Recently Played</h3>
            <div className="player-list">{playerList}</div>
        </div>
    )
}

export default RecentlyPlayed;
