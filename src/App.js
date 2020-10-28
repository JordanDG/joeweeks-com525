import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from "./components/week-1/Week1.js";
import Week2 from "./components/week-2/Week2.js";
import Week3 from "./components/week-3/Week3.js";
import Week4 from "./components/week-4/Week4.js";

// eslint-disable-next-line 
import styling from "./style.css";

function ReturnToMain() {
  return (
      <nav>
          <h1>Welcome to Interaction Design!</h1>
          <ul>
              <li>
                  <Link to="/week-1">Week1</Link>
              </li>
              <li>
                  <Link to="/week-2">Week2</Link>
              </li>
              <li>
                  <Link to="/week-3">Week3</Link>
              </li>
              <li>
                  <Link to="/week-4">Week4</Link>
              </li>
          </ul>
      </nav>
  )
}

function App() {
  return (
    <Router>
      <ReturnToMain />
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
        <Route path="/week-4">
          <Week4 />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
