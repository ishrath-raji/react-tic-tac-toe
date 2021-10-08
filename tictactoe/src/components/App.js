import "../App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Play from "./Play";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/gamehub/tictactoe" exact component={Home} />
      <Route path="/gamehub/tictactoe/play" component={Play} />
    </BrowserRouter>
  );
};

export default App;
