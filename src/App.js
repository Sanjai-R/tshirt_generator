import Home from "./Pages/Home/home";
import Design from "./Pages/Editors/Editors";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/editor/:type/:design" component={Design} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
