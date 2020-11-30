import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Weeks
import Week1 from "./components/week-1/Week1.js";
import Week2 from "./components/week-2/Week2.js";
import Week3 from "./components/week-3/Week3.js";
import Week4 from "./components/week-4/Week4.js";
import Week5 from "./components/week-5/week5.js";
import Week6 from "./components/week-6/week6.js";
import Week8 from "./components/week-8/week8.js";
import Week9 from "./components/week-9/week9.js";

// eslint-disable-next-line 
import styling from "./style.css";

function ReturnToMain() {
  return (
      <nav>
          <h1>COM525: Interaction Design Components</h1>
          <ul>
              <li>
                  <Link to="/week-1">Week 1</Link>
              </li>
              <li>
                  <Link to="/week-2">Week 2</Link>
              </li>
              <li>
                  <Link to="/week-3">Week 3</Link>
              </li>
              <li>
                  <Link to="/week-4">Week 4</Link>
              </li>
              <li>
                  <Link to="/week-5">Week 5</Link>
              </li>
              <li>
                  <Link to="/week-6">Week 6</Link>
              </li>
              <li>
                  <Link to="/week-8">Week 8</Link>
              </li>
              <li>
                  <Link to="/week-9">Week 9</Link>
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
        <Route path="/week-5">
          <Week5 />
        </Route>
        <Route path="/week-6">
          <Week6 />
        </Route>
        <Route path="/week-8">
          <Week8 />
        </Route>
        <Route path="/week-9">
          <Week9 />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
