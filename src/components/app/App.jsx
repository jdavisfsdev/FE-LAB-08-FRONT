import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact={true}>
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}
