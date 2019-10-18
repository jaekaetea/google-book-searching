import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
