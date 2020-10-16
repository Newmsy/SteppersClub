import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PressMain } from "./pressMain";
import { PressFirstSteps } from "./pressFirstSteps";
import { PressVoicenotes } from "./pressVoicenotes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: 50,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    marginBottom: 50,
    padding: 30,
  },
  firstStepsAlbumCover: {
    width: "100%",
  },
  gridItem: {
    padding: 30,
  },
}));

export function Press() {
  const styles = useStyles();

  return (
    <Router>
      <Switch>
        <Route path="/press/first-steps">
          <PressFirstSteps />
        </Route>
        <Route path="/press/voicenotes">
          <PressVoicenotes />
        </Route>
        <Route path="/press">
          <PressMain />
        </Route>
      </Switch>
    </Router>
  );
}

//{PressCard("", "", "")}
