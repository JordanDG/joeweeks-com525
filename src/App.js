import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from "./components/week-1/Week1.js";
import Week2 from "./components/week-2/Week2.js";
import Styling from "./style.css";

// import Week3 from "./components/week-3/Week3.js";
//<Route path="/week-3">
//  <Week3 />
//</Route>
//

const HomeNav = () => (
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
    </ul>
  </nav>
)

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
        <Route path="/">
          <HomeNav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
