import React from 'react';
import Player from './Player';
import "../App";


export const players =[
    {
        name:'Achini Rathnayake',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Software Developer",
        email:"something@99x.io",
        tel:"0777145778"

    },
    {
        name:'Anura Adhikari',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
        

    },
    {
        name:'Aravinthan Ramaraju',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    },
    {
        name:'Mohamed Shaffy',
        status:'offline',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    },
    {
        name:'Aishan Bamunawita',
        status: '3mins ago',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    },
    {
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"    
    },{
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    },{
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    },{
        name:'Aishan Bamunawita',
        status:'online',
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        title:"Tech Lead",
        email:"something@99x.io",
        tel:"0777145778"
    }
    
]
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
