import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';
import SauceForm from '../SauceForm';

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

      </Switch>
    </Router>
  );
}
