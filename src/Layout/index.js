import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LogoMain } from "../Pages/LogoMain";
import Hidden from "@material-ui/core/Hidden";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  gridContentWrapper: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 50%, rgba(255,255,255,1) 100%)",
    minHeight: "100vh",
    marginBottom: -100,
    backgroundImage: "url(/Assets/Images/bg.png)",
    backgroundSize: "100vw",
    backgroundRepeat: "repeat-y",
  },
  staticGrid: {
    position: "absolute",
    opacity: 0.8,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    top: 0,
  },
  steppersToolbarHeader: {
    fontsize: 30,
    color: "white",
  },
  gridMiniContentWrapper: {
    backgroundColor: "white",
    minHeight: "100vh",
    zIndex: 1,
    boxShadow: "0 4px 80px 0 rgba(0, 0, 0, 0.3), 0 6px 200px 0 rgba(0, 0, 0, 0.3)",
    opacity: 1,
  },
  popupWrapper: {
    position: "absolute",
    bottom: "20%",
    right: "25%",
    zIndex: 1000,
    transform: "rotate(10deg)",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05) rotate(0deg)",
    },
  },
  popup: {
    width: 170,

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
      <Hidden smDown>
        {new Date() < new Date(2021, 10, 5, 17, 0, 0, 0) && (
          <div className={styles.popupWrapper}>
            <Slide direction="left" in={true} timeout={550}>
              <Grid className={styles.popup}>
                <a target="_blank" rel="noopener noreferrer" href="/shop">
                  <Grid item xs={12}>
                    <img src="/Assets/Images/lookbook/WHITE LONG.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
                    <img
                      src="/Assets/Images/Shop/open for business.png"
                      style={{ marginLeft: "-30%", width: "160%", marginTop: -50, zIndex: 6 }}
                    />
                  </Grid>
                </a>
              </Grid>
            </Slide>
          </div>
        )}
      </Hidden>
      <Grid item xs={12} sm={10} md={8} lg={6} className={styles.gridMiniContentWrapper}>
        <LogoMain />
        {props.children}
      </Grid>
    </Grid>
  );
};
