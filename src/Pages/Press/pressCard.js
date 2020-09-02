import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../LogoMain";
import { render } from "@testing-library/react";

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

  pressImageCover: {
    width: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
    marginBottom: -5,
  },
  subCoverTitle: {
    justifyContent: "center",
    textAlign: "center",
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
    fontSize: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  imageHyperlink: {
    width: "95%",
    marginBottom: -10,
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
  },
  subCoverCardsSolo: {
    backgroundColor: "rgb(255, 209, 76)",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: "2px 2px 2px 2px rgb(42, 0, 141)",
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

export function PressCard(link, title, imageSource) {
  const styles = useStyles();

  return (
    <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
      <Grid xs={12} md={2}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageHyperlink}
        >
          <img
            className={styles.pressImageCover}
            src={"/Assets/Images/" + imageSource}
            alt={title}
          />
        </a>
      </Grid>
      <Grid xs={12} md={10} item>
        <Grid item container xs={12} className={styles.subCoverTitle}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            {title}
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
