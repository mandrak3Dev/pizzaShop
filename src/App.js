import React from "react";
import './styles/app.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import List from './components/restaurants/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/restaurants" component={List} />
      </Switch>
    </Router>
  );
}

export default App;
