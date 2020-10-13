import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Success from './Success';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/success" component={Success} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
