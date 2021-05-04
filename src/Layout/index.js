import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../Pages/LogoMain";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  gridContentWrapper: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 50%, rgba(255,255,255,1) 100%)",
    minHeight: "Calc(100vh - 80px)",
    [theme.breakpoints.down("md")]: {
      minHeight: "Calc(100vh - 50px)",
    },
    marginBottom: -100,
  },
  staticGrid: {
    backgroundImage: "url(/Assets/Images/static.jpg)",
    opacity: 0.05,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  steppersToolbarHeader: {
    fontsize: 30,
    color: "white",
  },
  gridMiniContentWrapper: {
    backgroundColor: "white",
    minHeight: "Calc(100vh - 80px)",
    [theme.breakpoints.down("md")]: {
      minHeight: "Calc(100vh - 50px)",
    },
    zIndex: 1,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
    opacity: 1,
  },
  popupWrapper: {
    position: "absolute",
    bottom: "20%",
    right: "5%",
    zIndex: 1000,
    transform: "rotate(10deg)",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05) rotate(0deg)",
    },
  },
  popup: {
    width: 250,

    borderRadius: 10,
    //borderColor: "black",

    opacity: 1,
    //border: "5px solid",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(20deg)",
  },
  pressHeader: {
    color: "rgb(4,44,159)",

    fontWeight: 700,
    fontSize: 18,
  },
  socialMediaImageSoundcloud: {
    width: "100%",
    radius: 10,
    borderRadius: 10,
  },
}));

export const Layout = (props) => {
  const styles = useStyles();
  return (
    <Grid container className={styles.gridContentWrapper}>
      <Grid item container xs={12} className={styles.staticGrid}></Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        className={styles.gridMiniContentWrapper}
      >
        <LogoMain />
        {props.children}
      </Grid>
    </Grid>
  );
};
