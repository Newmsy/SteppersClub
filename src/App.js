import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Releases } from "./Pages/Releases";
import { Videos } from "./Pages/Videos";
import { Shop } from "./Pages/Shop";
import { Events } from "./Pages/Events";
import { Press } from "./Pages/Press";
import { Contact } from "./Pages/Contact";
import { Roster } from "./Pages/Roster";
import { Lookbook } from "./Pages/Lookbook";
import { Layout } from "./Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appWrapper: {
    backgroundColor: "white",
    position: "relative",
    minHeight: "100vh",
  },
});

export default function App() {
  const styles = useStyles();
  return (
    <div className={styles.appWrapper}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/releases">
              <Releases />
            </Route>
            <Route path="/roster">
              <Roster />
            </Route>
            <Route path="/press">
              <Press />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/shop/lookbook">
              <Lookbook />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/events">
              <Events />
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
