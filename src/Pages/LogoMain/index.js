import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginBottom: 0,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    marginTop: 0,
  },
  gridItemWrapper: {
    marginLeft: "-25%",
  },
  logoImage: {
    zIndex: 5,
    position: "relative",
    width: "110%",
    marginLeft: "-26%",
    marginTop: "20%",
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
    boxShadow: "0 4px 8px 0 rgba(4,44,159, 0.2), 0 6px 20px 0 rgba(4,44,159, 0.19)",
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
    width: "120%",
    marginLeft: "-5%",
    marginTop: "-5%",
    zIndex: 100,
  },
  gridLinksWrapper: {
    zIndex: 2,
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      marginTop: -70,
    },
    marginBottom: 50,
  },
  linkGridItem: {
    textAlign: "center",
    marginBottom: 10,
  },
}));

export function LogoMain() {
  const styles = useStyles();

  return (
    <Grid item container className={styles.gridMainContentWrapper}>
      <Grid item xs={8} style={{ display: "flex", flexDirection: "row" }}>
        <a href="/">
          <img src="/Assets/Images/logoText.png" alt="Steppers Club Logo" className={styles.logoNameImage} />
        </a>
        <a href="/">
          <img src="/Assets/Images/SteppersLogo.png" alt="Steppers Club Logo" className={styles.logoImage} />
        </a>
      </Grid>
      <Grid item container xs={10} className={styles.gridLinksWrapper}>
        <Grid item xs={12} sm={6} md={3} lg={3} className={styles.linkGridItem}>
          <a href="/releases" className={styles.homepageLinkImage}>
            <img className={styles.homepageImageButton} alt="RELEASES" src="/Assets/Images/releases.png" />
          </a>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} className={styles.linkGridItem}>
          <a
            href="https://www.facebook.com/steppersclub/events"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.homepageLinkImage}
          >
            <img className={styles.homepageImageButton} alt="EVENTS" src="/Assets/Images/events.png" />
          </a>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} className={styles.linkGridItem}>
          <a href="/shop" className={styles.homepageLinkImage}>
            <img className={styles.homepageImageButton} alt="SHOP" src="/Assets/Images/shop.png" />
          </a>
        </Grid>
      </Grid>
      <Grid xs={6}>
        <Divider style={{ height: 3, marginBottom: 40, marginTop: -30 }} />
      </Grid>
    </Grid>
  );
}
