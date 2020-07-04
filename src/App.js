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
import { Footer } from './Footer'
import { Layout } from './Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  appWrapper: {
    backgroundColor: 'rgb(255,209,76)'
  }
});

export default function App() {
  const styles = useStyles()
  return (
    <div className={styles.appWrapper}>
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
    <Footer/>
    </div>
  );
}