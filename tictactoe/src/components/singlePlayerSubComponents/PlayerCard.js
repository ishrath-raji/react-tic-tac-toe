import "../../App.css";
import React, { useEffect, useState } from "react";
import players from "../../persondata.json";
import { Avatar } from "antd";

const PlayerCard = ({ turn, symbol, isMultiplayer, playerNo }) => {
  // console.log(turn);
  const [playerName, setPlayerName] = useState("");
  const [playerAvatar, setPlayerAvatar] = useState("");
  const [playerTitle, setPlayerTitle] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [playerTel, setPlayerTel] = useState("");
  const number = Math.floor(Math.random() * (players.length - 1) + 1);

  //   console.log(turn);
  const profileData = async () => {
    try {
      const profile = players[number];
      setPlayerAvatar(profile.src);
      setPlayerName(profile.name);
      setPlayerTitle(profile.title);
      setPlayerEmail(profile.email);
      setPlayerTel(profile.tel);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    profileData();
  }, []);
  if(isMultiplayer){
      if(playerNo === 1){
        return (
          <div className="player-card-container multiMargin">
            <div className="player-one-card">
              <p className="player-avatar">
                <Avatar size={100} src={playerAvatar} />
              </p>
                <h5>{playerName}</h5>
                <p>{playerTitle}</p>
                <p className="player-contact">
                  {playerEmail} {playerTel}
              </p>
              
            </div>
          </div>
          );
      }else{
        return (
          <div className="player-card-container multiMargingit p">
            <div className="player-two-card">
              <p className="player-avatar">
                <Avatar size={100} src={playerAvatar} />
              </p>
                <h5>{playerName}</h5>
                <p>{playerTitle}</p>
                <p className="player-contact">
                  {playerEmail} {playerTel}
              </p>
              
            </div>
          </div>
          );
      }
  }else{
    return (
      <div className="player-card-container">
        <div className={`player-one-card ${turn === symbol ? "" : "aiturn"}`}>
          <p className="player-avatar">
            <Avatar size={150} src={playerAvatar} />
          </p>
           <h5>{playerName}</h5>
        </div>
      </div>
    );

  }
};

export default PlayerCard;
