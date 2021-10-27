import "../App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import SinglePlayer from "./SinglePlayer";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/gamehub/tictactoe" exact component={Home} />
      <Route path="/gamehub/tictactoe/play" exact component={Play} />
      <Route
        path="/gamehub/tictactoe/play/singleplayer"
        component={SinglePlayer}
      />
    </BrowserRouter>
  );
};

export default App;
