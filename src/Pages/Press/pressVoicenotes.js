import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../LogoMain";
import { PressCard } from "./pressCard";

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
  },

  pressHeader: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
}));

export function PressVoicenotes() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid
        item
        container
        xs={12}
        style={{ textAlign: "center" }}
        justify="center"
      >
        <h1 className={styles.pressHeader}>Press - Voicenotes</h1>
        {PressCard(
          "https://www.onthewax.com/sounds/exclusive-label-boss-zefer-presents-his-magical-debut-2-tracker-on-innovative-ukg-startup-steppers-club-otw-premiere",
          "ON THE WAX PREMIERE / 21.10.20",
          "WaxPressImage.png"
        )}
        {PressCard(
          "https://threethousand.co.uk/we-premiere-the-latest-zefer-magic-via-steppers-club/",
          "3000 BLOG PREMIERE / 21.10.20",
          "3080PressImage.png"
        )}
        {PressCard(
          "https://www.youtube.com/watch?v=nWAv7m-i0Q8&feature=youtu.be&fbclid=IwAR1rwuNkd4tyM9pnvzmIis5rtWkJJ7Pr75h5tnnnbtuwygOB2vtF_0NmX-Q",
          "HIVECAST INTERVIEW / 20.10.20",
          "BassHivePressIcon.jpg"
        )}
      </Grid>
    </Grid>
  );
}

//{PressCard("", "", "")}
//{PressCard("", "", "")}
