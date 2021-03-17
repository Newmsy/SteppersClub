import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginBottom: -50,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    marginTop: 50,
  },
  gridItemWrapper: {
    marginLeft: "-25%",
  },
  logoImage: {
    zIndex: 5,
    position: "relative",
    width: "100%",
    marginLeft: "-20%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
    // [theme.breakpoints.down("md")]: {
    //   width: "75%",
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: "50%",
    // },
  },
  goHomeGrid: {
    position: "absolute",
    marginTop: "-5%",
    transition: "0.3s",
    textDecoration: "none",
    marginLeft: "10%",
    backgroundColor: "white",
    color: "rgb(4,44,159)",
    borderWidth: 2,
    borderRadius: 25,
    width: 80,
    height: 40,
    borderStyle: "solid",
    borderColor: "rgb(4,44,159)",
    textAlign: "center",
    boxShadow:
      "0 4px 8px 0 rgba(4,44,159, 0.2), 0 6px 20px 0 rgba(4,44,159, 0.19)",
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  goHomeText: {
    textDecoration: "none",
    fontWeight: 800,
    position: "relative",
    bottom: 8,
  },
  goHomeLink: {
    "&:hover ~ $goHomeGrid": {
      transform: "translate(-90px,0px)",
    },
    width: 0,
    height: 0,
    position: "relative",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("md")]: {
      left: "25%",
    },
    [theme.breakpoints.up("md")]: {
      left: "50%",
    },
  },
  logoNameImage: {
    width: "100%",
    marginLeft: "-5%",
    marginTop: "-5%",
    zIndex: 100,
  },
}));

export function LogoMain() {
  const styles = useStyles();
  const [showText, setShowText] = useState(false);

  return (
    <Grid item container className={styles.gridMainContentWrapper}>
      <Grid item xs={8}>
        <a
          href="/"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          <img
            src="/Assets/Images/Banner.png"
            alt="Steppers Club Logo"
            className={styles.logoNameImage}
          />
        </a>
        {/* <div
          className={styles.goHomeGrid}
          style={showText ? {} : { visibility: "hidden" }}
        >
          <p className={styles.goHomeText}>Home</p>
        </div> */}
      </Grid>
    </Grid>
  );
}
