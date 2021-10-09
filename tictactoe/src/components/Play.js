import React from "react";
import { Link } from "react-router-dom";
import Leaderboard from "./homeSubComponents/Leaderboard";
import Menu from "./Menu";

const Play = () => {
  return (
    <div>
      Play Screen <br />
      <Link to="/gamehub/tictactoe">
        <button>back</button>
      </Link>
      <Menu />
      <Leaderboard />
    </div>
  );
};

export default Play;
