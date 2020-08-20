import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../LogoMain";

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
    marginBottom: 100,
  },
  videosHeader: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
  },
  gridVideoContainer: {
    justifyContent: "center",
  },
  gridVideoWrapper: {
    marginBottom: 40,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
    [theme.breakpoints.up("sm")]: {
      height: 600,
    },
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
}));

export function Videos() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.videosHeader}>Videos</h1>
      </Grid>
      <Grid item container xs={12} className={styles.gridVideoContainer}>
        <Grid item container xs={12} sm={8} className={styles.gridVideoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Quufc-Wlne8"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item container xs={12} sm={8} className={styles.gridVideoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/30IfE91Ujbc"
            allowfullscreen
            title="Youtube Welcome to Steppers"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}
