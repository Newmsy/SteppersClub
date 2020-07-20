import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Pages/Home'
import { Releases } from './Pages/Releases'
import { Videos } from './Pages/Videos'
import { Shop } from './Pages/Shop'
import { Events } from './Pages/Events'
import { Press } from './Pages/Press'
import { Contact } from './Pages/Contact'
import { Roster } from './Pages/Roster'
import { Toolbar } from './Toolbar'
import { Footer } from './Footer'
import { Layout } from './Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  appWrapper: {
    backgroundColor: 'rgb(255,209,76)',
    position: 'relative',
    minHeight: '100vh'
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
              <Route path="/contact">
                <Contact />
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