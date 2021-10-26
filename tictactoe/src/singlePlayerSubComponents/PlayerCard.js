import "../App.css";
import React, { useEffect, useState } from "react";
import {players} from "../components/homeSubComponents/RecentlyPlayed";
import {AITurn} from "./GameBoard";


const PlayerCard = () => {
   const [AITurn, setAITurn] = useState("");

   const[playerName, setPlayerName] = useState("");
   const[playerAvatar, setPlayerAvatar] = useState("");
   const[playerTitle, setPlayerTitle] = useState("");
   const[playerEmail, setPlayerEmail] = useState("");
   const[playerTel,setPlayerTel] = useState("");
   const number =  Math.floor(Math.random()* (players.length - 1) + 1);

    // need to use useffect 
    const profileData = async () =>{
       try{
          const profile = players[number]
          setPlayerAvatar(profile.src)
          setPlayerName(profile.name)
          setPlayerTitle(profile.title)
          setPlayerEmail(profile.email)
          setPlayerTel(profile.tel)
          setAITurn(true)
       }catch(error){
          console.log(error)
       }
    }

    useEffect(() => {
       profileData();
    },[])
    return (
       <div className="player-card-container">
            <div className={`player-card ${AITurn? "" : "aiturn"}`}>
                
               <p className="player-avatar"><img src={playerAvatar} width="110"/></p>
               <h5>{playerName}</h5>
               <p>{playerTitle}</p> 
               <p className="player-contact">{playerEmail} {playerTel}</p>
               {/* <p className="player-status">active</p><br/> */}
              </div>
       </div>
    )
}

export default PlayerCard;