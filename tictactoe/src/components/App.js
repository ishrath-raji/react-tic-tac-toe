import "../App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import SinglePlayer from "./SinglePlayer";
import Lobby from "./Lobby";
import Multiplayer from "./MultiPlayer";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/gamehub/tictactoe" exact component={Home} />
      <Route path="/gamehub/tictactoe/play" exact component={Play} />
      <Route
        path="/gamehub/tictactoe/play/singleplayer"
        exact
        component={SinglePlayer}
      />
      <Route path="/gamehub/tictactoe/play/lobby" exact component={Lobby} />
      <Route path="/gamehub/tictactoe/play/lobby/multiplayer" exact component={Multiplayer} />
    </BrowserRouter>
  );
};

export default App;
