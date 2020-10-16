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
  gridItemWrapper: {},
  releaseItemGrid: {
    textAlign: "center",
    color: "#fff",
  },
  pressHeader: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
  eventsComingSoonText: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
  eventsComingSoonWrapper: {
    textAlign: "center",
  },
  pressImageCover: {
    width: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
    marginBottom: -5,
  },
  pressIconGrid: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 0,
    width: "100%",
    zIndex: 500,
  },
  subCoverTitle: {
    justifyContent: "center",
    textAlign: "center",
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
    fontSize: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  subCoverCardsBack: {
    backgroundColor: "rgba(255, 220, 120, 0.6)",
    minHeight: 200,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    boxShadow: "2px 2px 2px 2px rgb(4,44,159)",
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  subCoverCardsFront: {
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  soundcloudItem: {
    marginTop: 30,
    marginLeft: "7.5%",
  },
  imageHyperlink: {
    width: "95%",
    marginBottom: -10,
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
  },
  subCoverCardsSolo: {
    backgroundColor: "rgb(255,255,255)",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: "2px 2px 2px 2px rgb(4,44,159)",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 0,
    },
  },
}));

export function PressVoicenotes() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.pressHeader}>Press - Voicenotes</h1>
      </Grid>
    </Grid>
  );
}

//{PressCard("", "", "")}
//{PressCard("", "", "")}
