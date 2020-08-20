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
  shopComingSoonText: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
  },
  contactComingSoonWrapper: {
    textAlign: "center",
  },
  contactEmailLink: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76)",
    fontWeight: 700,
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
}));

export function Contact() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <Grid item xs={12} className={styles.contactComingSoonWrapper}>
          <h1 className={styles.shopComingSoonText}>
            FOR ALL ENQUIRIES AND SUBMISSIONS
          </h1>
        </Grid>
        <Grid item xs={12} className={styles.contactComingSoonWrapper}>
          <a
            href="mailto:steppersclubuk@gmail.com"
            className={styles.contactEmailLink}
          >
            steppersclubuk@gmail.com
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
