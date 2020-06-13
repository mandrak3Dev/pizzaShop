import React from "react";
import './styles/app.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Stores from './components/Stores';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/stores" component={Stores} />
      </Switch>
    </Router>
  );
}

export default App;
