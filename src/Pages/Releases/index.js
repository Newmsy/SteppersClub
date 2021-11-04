import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: 10,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
  },
  gridItemWrapper: {},
  releaseItemGrid: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 0,
  },
  soundcloudItem: {
    marginTop: 20,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginBottom: 50,
  },
  firstStepsAlbumCover: {
    width: "100%",
    height: "100%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "relative",
  },
  subCoverTitle: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    color: "rgb(40,0,122)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(40,0,122)",
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 15,
  },
  subCoverIcons: {
    justifyContent: "center",
  },
  releasesHeader: {
    color: "rgb(40,0,122)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(40,0,122)",
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
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05) rotate(20deg)",
    },
  },
  releaseItem: {
    paddingTop: 20,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3),0px 8px 8px  rgba(0, 0, 0, 0.3)",
  },
}));

export function Releases() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={6} style={{ textAlign: "center", paddingBottom: 30, marginTop: 30 }}>
        <img alt="RELEASES" src="/Assets/Images/releases.png" />
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(140,241,2,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/bodybagpromo.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/para-bodybag">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/0WUKtMMVG98i4HPN2bW7lw">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/bodybag/3529177">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/para-bodybag/5283753-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1311560128&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/para-bodybag"
              title="Para - Bodybag EP"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Para - Bodybag EP
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(149,82,240,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/electricitypromo.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/zefer-electricity">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/3aRmXCYp7IRPyVf8QaawPh">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/electricity/3502061">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/zefer-electricity/5257691-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115841934&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/zefer-electricity"
              title="Zefer - Electricity"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Zefer - Electricity
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(85,185,242,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/bubblinpromo.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/minista-x-the-illustration-bubblin">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/3LBbGHgD42JdWgH6gbsACV">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/bubblin/3482950">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.junodownload.com/products/minista-the-illustration-bubblin/5232969-02/"
            >
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1105446493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/minista-x-the-illustration-bubblin"
              title="Minista x The Illustration - Bubblin"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Minista x The Illustration - Bubblin
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(224,195,64,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/realSoonArt.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://soundcloud.com/steppersclub/minista-x-oppidan-x-sam-deeley-x-sensa-x-zefer-real-soon"
            >
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/7uHHr2BtvsNgHpwenCUHha">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/real-soon/3359055">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/real-soon/5051842-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1022514097&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/minista-x-oppidan-x-sam-deeley-x-sensa-x-zefer-real-soon"
              title="Minista x Oppidan x Sam Deeley x Sensa x Zefer - Real Soon"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Minista x Oppidan x Sam Deeley x Sensa x Zefer - Real Soon
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(206,64,156,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/deeleyRelease.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/sam-deeley-never-too-late-ep">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/5oAk28MOXGKvi1oXYM8BD7">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/never-too-late/3313020">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.junodownload.com/products/sam-deeley-caesar-sydney-never-too-late/5004158-02/"
            >
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1217586418&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/sam-deeley-never-too-late-ep"
              title="Sam Deeley - Never Too Late EP"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Sensa - Deja Vu EP
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(200,237,215,0.5) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/DejaVuArtwork.png" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/sensa-deja-vu-ep">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/6ONFuQkS1pgJzi4ybS1QGL">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/deja-vu/3281791">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/sensa-deja-vu/4962978-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1210191172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/sensa-deja-vu-ep"
              title="Sensa - Deja Vu EP"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Sensa - Deja Vu EP
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(225,20,17,0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/minista-artwork.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/minista-save-me-ep">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/6SbvP6L8fhpfCVH81BBt1o">
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/save-me/3259324">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/minista-save-me/4923842-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1187760298&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/minista-save-me-ep"
              title="Minista - Save Me EP"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Minista - Save Me EP
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(139,204,222, 0.5) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/oppidan-release.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/oppidan-0117-ep">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/album/3t8vvn145Ylr4bYS974DVL?si=k7mTEcz9TuO9mhVSTzqheA"
            >
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/0117/3171667">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/oppidan-0117/4815251-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1150097684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/oppidan-0117-ep"
              title="Oppidan - 0117 EP"
              target="_blank"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Oppidan - 0117 EP
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(0,22,188, 0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/voicenotes.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/zefer-voicenotes-ep">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/album/5UwuLWvqfWPDRQvrEykvTS?si=zmZYBoqiRGitT05AzRmKZg"
            >
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/release/voicenotes/3142977">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.junodownload.com/products/zefer-voicenotes/4780937-02/">
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1128574003&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/zefer-voicenotes-ep"
              title="First Steps"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Voicenotes
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify="center"
        className={styles.releaseItem}
        style={{ background: "linear-gradient(0deg,rgba(40,140,190,0) 0%,  rgba(42,0,141, 0.3) 100%)" }}
      >
        <Grid item container xs={8} sm={4} className={styles.releaseItemGrid}>
          <img className={styles.firstStepsAlbumCover} src="/Assets/Images/first_steps_cover.jpg" alt="First Steps" />
        </Grid>
        <Grid item container xs={9} className={styles.subCoverTitle}>
          <img src="/Assets/Images/stream.png" alt="stream" style={{ marginBottom: 10, maxWidth: "100%" }} />
        </Grid>
        <Grid item container xs={7} className={styles.subCoverIcons}>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub/sets/first-steps">
              <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/album/0z784xdIMOxYL9K7Y59hIL?si=h-VG7soORbWUE2m6WQtJEw"
            >
              <img src="/Assets/Images/spotifyLogo.png" alt="SPOTIFY" className={styles.socialMediaImageSpotify} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.beatport.com/label/steppers-club/88536">
              <img src="/Assets/Images/beatportLogo.png" alt="BEATPORT" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
          <Grid item xs={3} sm={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.junodownload.com/products/sensa-zefer-t-ay-o-first-steps/4695115-02/"
            >
              <img src="/Assets/Images/junoReleaseLogo.png" alt="JUNO" className={styles.socialMediaImageBeatport} />
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
          <iframe
            title="soundcloudPlayer"
            width="100%"
            height="350"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1113687451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steppersclub"
              title="Steppers Club"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              Steppers Club
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steppersclub/sets/first-steps"
              title="First Steps"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: " #cccccc", textDecoration: "none" }}
            >
              First Steps
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
