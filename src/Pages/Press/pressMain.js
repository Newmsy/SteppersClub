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
    padding: 30,
  },
  firstStepsAlbumCover: {
    width: "100%",
  },
  gridItem: {
    padding: 30,
  },
}));

export function PressMain() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid item xs={12} sm={6} className={styles.gridItem}>
        <a href="/press/0117">
          <img
            className={styles.firstStepsAlbumCover}
            src="/Assets/Images/oppidan-release.jpg"
            alt="0117"
          />
        </a>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.gridItem}>
        <a href="/press/voicenotes">
          <img
            className={styles.firstStepsAlbumCover}
            src="/Assets/Images/voicenotes.jpg"
            alt="Voicenotes"
          />
        </a>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.gridItem}>
        <a href="/press/first-steps">
          <img
            className={styles.firstStepsAlbumCover}
            src="/Assets/Images/first_steps_cover.jpg"
            alt="First Steps"
          />
        </a>
      </Grid>
    </Grid>
  );
}

//{PressCard("", "", "")}
//{PressCard("", "", "")}
