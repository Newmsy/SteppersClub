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
  },
  gridItemWrapper: {},
  eventsComingSoonText: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
  eventsComingSoonWrapper: {
    textAlign: "center",
  },
  shopHeader: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
}));

export function Shop() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.shopHeader}>Shop</h1>
      </Grid>
      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <Grid item xs={12} className={styles.eventsComingSoonWrapper}>
          <h1 className={styles.eventsComingSoonText}>COMING SOON</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
