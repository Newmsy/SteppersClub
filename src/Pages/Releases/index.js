import React from "react";
import { makeStyles, Hidden, Slide } from "@material-ui/core";
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
    marginBottom: 50,
  },
  gridItemWrapper: {},
  releaseItemGrid: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 0,
  },
  soundcloudItem: {
    marginTop: 20,
  },
  firstStepsAlbumCover: {
    width: "100%",
    height: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
  },
  subCoverTitle: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 30,
    marginTop: 10,
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 15,
  },
  subCoverIcons: {
    justifyContent: "center",
  },
  releasesHeader: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
  },
  socialMediaImageAppleMusic: {
    width: "120%",
    marginLeft: "-8%",
    marginTop: "-12%",
    minWidth: 40,
  },
  socialMediaImageBeatport: {
    width: "90%",
    marginTop: "3%",
    marginLeft: "5%",
    minWidth: 40,
  },
  socialMediaImageSoundcloud: {
    width: "90%",
    position: "relative",
    top: "2.25%",
    minWidth: 40,
  },
  socialMediaImageSpotify: {
    width: "92%",
    position: "relative",
    top: "4%",
    minWidth: 40,
    left: "6%",
  },
  gridRightSticker: {
    position: "absolute",
    left: "83%",
    top: "60%",
  },
  stickerImage: {
    width: "55%",
    transform: "rotate(20deg)",
    "&:hover": {
      transform: "scale(1.05) rotate(20deg)",
      transition: "0.5s",
    },
  },
}));

export function Releases() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.releasesHeader}>Releases</h1>
      </Grid>
      <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
        <img
          className={styles.firstStepsAlbumCover}
          src="/Assets/Images/first_steps_cover.jpg"
          alt="First Steps"
        />
      </Grid>
      <Grid item container xs={9} className={styles.subCoverTitle}>
        STREAM/PURCHASE:
      </Grid>
      <Grid item container xs={7} className={styles.subCoverIcons}>
        <Grid item xs={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/steppersclub/sets/first-steps"
          >
            <img
              src="/Assets/Images/soundcloudLogo.png"
              alt="Soundcloud"
              className={styles.socialMediaImageSoundcloud}
            />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/album/0z784xdIMOxYL9K7Y59hIL?si=h-VG7soORbWUE2m6WQtJEw"
          >
            <img
              src="/Assets/Images/spotifyLogo.png"
              alt="Spotify"
              className={styles.socialMediaImageSpotify}
            />
          </a>
        </Grid>
        {/* <Grid item xs={2}>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/Assets/Images/appleMusicLogo.png"
              alt="SOUNDCLOUD"
              className={styles.socialMediaImageAppleMusic}
            />
          </a>
        </Grid> */}
        <Grid item xs={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.beatport.com/label/steppers-club/88536"
          >
            <img
              src="/Assets/Images/beatportLogo.png"
              alt="YOUTUBE"
              className={styles.socialMediaImageBeatport}
            />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.junodownload.com/products/sensa-zefer-t-ay-o-first-steps/4695115-02/"
          >
            <img
              src="/Assets/Images/junoReleaseLogo.png"
              alt="YOUTUBE"
              className={styles.socialMediaImageBeatport}
            />
          </a>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Slide direction="left" in={true} timeout={700}>
          <Grid item xs={12} container className={styles.gridRightSticker}>
            <a
              href="https://ampl.ink/N99ZM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Assets/Images/artworkSticker.png"
                className={styles.stickerImage}
              />
            </a>
          </Grid>
        </Slide>
      </Hidden>
    </Grid>
  );
}

//   <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
//                     <Fade in={true} timeout={2000}>
//                         <iframe title="SoundcloudExample" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/848565127&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
//                         </iframe>
//                     </Fade>
//                 </Grid>
