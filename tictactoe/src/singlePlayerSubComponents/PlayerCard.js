import "../App.css";
import React, { useEffect, useState } from "react";
import {players} from "../components/homeSubComponents/RecentlyPlayed";


const PlayerCard = () => {
   

   const[playerName, setPlayerName] = useState("");
   const[playerAvatar, setPlayerAvatar] = useState("");
   const[playerTitle, setPlayerTitle] = useState("");
   const[playerTags, setPlayerTags] = useState("");
   const number =  Math.floor(Math.random()* (players.length - 1) + 1);

    // need to use useffect 
    const profileData = async () =>{
       try{
          const profile = players[number]
          setPlayerAvatar(profile.src)
          setPlayerName(profile.name)
          setPlayerTitle(profile.title)
          setPlayerTags(profile.tags)
       }catch(error){
          console.log(error)
       }
    }

    useEffect(() => {
       profileData();
    },[])
    return (
       <div className="player-card-container">
            <div className="player-card">
                
               <p className="player-avatar"><img src={playerAvatar} width="110"/></p>
               <h5>{playerName}</h5>
               <p>{playerTitle}</p> 
               <p className="player-tags">{playerTags}</p>
               {/* <p className="player-status">active</p><br/> */}
              </div>
       </div>
    )
}

export default PlayerCard;