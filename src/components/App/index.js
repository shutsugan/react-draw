import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Draw from "../../pages/Draw";
import Stats from "../../pages/Stats";

function App() {
  return (
    <Router>
      <div className="app h-full">
        <Header />

        <Switch>
          <Route exact path="/">
            <Draw />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
