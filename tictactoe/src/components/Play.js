import React from "react";
import { Link } from "react-router-dom";
import Leaderboard from "./homeSubComponents/Leaderboard";

const Play = () => {
  return (
    <div>
      Play Screen <br />
      <Link to="/gamehub/tictactoe">
        <button>back</button>
      </Link>
      <Leaderboard />
    </div>
  );
};

export default Play;
