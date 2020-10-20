import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from "./components/week-1/Week1.js";
import Week2 from "./components/week-2/Week2.js";
import Week3 from "./components/week-3/Week3.js";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/week-1">
          <Week1 />
        </Route>
        <Route path="/week-2">
          <Week2 />
        </Route>
        <Route path="/week-3">
          <Week3 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
