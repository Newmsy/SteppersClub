import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PressMain } from "./pressMain";
import { PressFirstSteps } from "./pressFirstSteps";
import { PressVoicenotes } from "./pressVoicenotes";
import { Press0117 } from "./press0117";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function Press() {
  return (
    <Router>
      <Switch>
        <Route path="/press/first-steps">
          <PressFirstSteps />
        </Route>
        <Route path="/press/0117">
          <Press0117 />
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
