import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../Pages/LogoMain";

const useStyles = makeStyles({
  gridContentWrapper: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(255,209,76,1) 0%, rgba(191,156,55,1) 50%, rgba(255,209,76,1) 100%)",
    minHeight: "Calc(100vh - 80px)",
  },
  steppersToolbarHeader: {
    fontsize: 30,
    color: "white",
  },
  gridMiniContentWrapper: {
    backgroundColor: "white",
    minHeight: "Calc(100vh - 80px)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
  },
});

export const Layout = (props) => {
  const styles = useStyles();
  return (
    <Grid container className={styles.gridContentWrapper}>
      <Grid item xs={12} sm={6} className={styles.gridMiniContentWrapper}>
        <LogoMain />
        {props.children}
      </Grid>
    </Grid>
  );
};
