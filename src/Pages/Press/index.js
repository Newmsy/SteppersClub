import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PressMain } from "./pressMain";
import { PressFirstSteps } from "./pressFirstSteps";
import { PressVoicenotes } from "./pressVoicenotes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function Press() {
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
