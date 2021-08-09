import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';
import SauceForm from '../SauceForm';
import SauceDetails from '../SauceDetails';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path="/" exact={true}>
          <Main />
        </Route>

        <Route path="/add" exact={true}>
          <SauceForm />
        </Route>

        <Route path="/:id" exact={true}>
          <SauceDetails />
        </Route>

      </Switch>
    </Router>
  );
}
