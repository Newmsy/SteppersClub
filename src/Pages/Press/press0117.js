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

export function Press0117() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.pressHeader}>Press - 0117</h1>
      </Grid>
      {PressCard(
        "https://www.junodownload.com/products/oppidan-0117/4815251-02/",
        "JUNO DOWNLOAD REVIEW / 06.11.20",
        "junodownloadPressIcon.jpg"
      )}
      {PressCard(
        "https://soundcloud.com/juno-download/juno-download-podcast-steppers-club-with-zefer-oppidan-sensa?ref=clipboard&p=i&c=0",
        "JUNO DOWNLOAD INTERVIEW / 06.11.20",
        "junodownloadPressIcon.jpg"
      )}
    </Grid>
  );
}

//{PressCard("", "", "")}
//{PressCard("", "", "")}
