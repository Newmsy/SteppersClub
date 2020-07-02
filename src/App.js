import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Pages/Home'
import { Toolbar } from './Toolbar'
import { Layout } from './Layout'

export default function App() {
  return (
    <div>
    <Toolbar/>
    <Layout>
      <Router>
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/users">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </Layout>
    </div>
  );
}