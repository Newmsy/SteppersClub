import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  pressHeader: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
  },
  eventsComingSoonText: {
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
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
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
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
    boxShadow: "2px 2px 2px 2px rgb(42, 0, 141)",
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  subCoverCardsFront: {
    backgroundColor: "rgb(255, 209, 76)",
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

export function Press() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.pressHeader}>Press</h1>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.youtube.com/watch?v=Z9uGOOrBJRo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/3000PressImage.jpg"
              alt="Juno Download"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.youtube.com/watch?v=Z9uGOOrBJRo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              3000 BASS PREMIERE: ZEFER - STEPPIN’ (FEAT. - T.AY.O) / 20.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.junodownload.com/products/sensa-zefer-t-ay-o-first-steps/4695115-02/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/junodownloadPressIcon.jpg"
              alt="Juno Download"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.junodownload.com/products/sensa-zefer-t-ay-o-first-steps/4695115-02/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              JUNO DOWNLOAD REVIEW / 20.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.facebook.com/watch/?v=3162433387186205&extid=HnxgThcHFYg50RkG"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/BassHivePressIcon.jpg"
              alt="Bass Hive"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.facebook.com/watch/?v=3162433387186205&extid=HnxgThcHFYg50RkG"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              BASS HIVE FEATURE AND INTERVIEW: SENSA / 19.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://threethousand.co.uk/steppers-club-launch-their-label-officially-with-a-top-quality-new-compilation/?fbclid=IwAR2fke-kouwUnp8DXafq7MOyTd9oVTBIEJqb7MxJXOxiTvSDlGggij9ZqgA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/3080PressImage.png"
              alt="3080"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://threethousand.co.uk/steppers-club-launch-their-label-officially-with-a-top-quality-new-compilation/?fbclid=IwAR2fke-kouwUnp8DXafq7MOyTd9oVTBIEJqb7MxJXOxiTvSDlGggij9ZqgA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              3000 BLOG FEATURE AND PREMIERE: OPPIDAN - REWIND / 19.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://l.messenger.com/l.php?u=https%3A%2F%2Fsoundcloud.com%2Fonthewax%2Fminista-dopamine-steppers-club-otw-premiere&h=AT1lkpM-c88aUschqnYTJwM_NABZFQanrtv2B5oZc6JdXEggOu5cjQjCxz28thoeLUG7JQNKAC1Rmlvb3jJcISCVSYuM_uaVf5PeWmJf3fXChxj2rpgqy9lsLf4hA5-0SG7c-ueFABM8aAjEyz4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/WaxPressImage.png"
              alt="On the Wax"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://l.messenger.com/l.php?u=https%3A%2F%2Fsoundcloud.com%2Fonthewax%2Fminista-dopamine-steppers-club-otw-premiere&h=AT1lkpM-c88aUschqnYTJwM_NABZFQanrtv2B5oZc6JdXEggOu5cjQjCxz28thoeLUG7JQNKAC1Rmlvb3jJcISCVSYuM_uaVf5PeWmJf3fXChxj2rpgqy9lsLf4hA5-0SG7c-ueFABM8aAjEyz4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              ON THE WAX PREMIERE: MINISTA - DOPAMINE / 18.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.cygnetmagazine.co.uk/cygnet-durham/steppers-club-the-new-face-of-the-uk-garage-scene"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/CygnetPressIcon.png"
              alt="Cygnet Magazine"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.cygnetmagazine.co.uk/cygnet-durham/steppers-club-the-new-face-of-the-uk-garage-scene"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              CYGNET MAGAZINE FEATURE / 08.10.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.bbc.co.uk/sounds/play/p08lyr79"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/BBCPressImage.png"
              alt="BBC Introducing"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.bbc.co.uk/sounds/play/p08lyr79"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              BBC INTRODUCING FEATURE: SAM DEELEY - 2094 / 08.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://soundcloud.com/steppersclub/reprezent-fm-steppers-club-guest-mix-and-interview-080820-zefer-w-meltout-crew"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/ReprezentIcon.jpeg"
              alt="Reprezent Radio"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://soundcloud.com/steppersclub/reprezent-fm-steppers-club-guest-mix-and-interview-080820-zefer-w-meltout-crew"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              REPREZENT FM GUEST APPEARANCE / 08.08.20
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
        <Grid xs={12} md={2}>
          <a
            href="https://www.bbc.co.uk/programmes/p08kqbxv"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageHyperlink}
          >
            <img
              className={styles.pressImageCover}
              src="/Assets/Images/BBCPressImage.png"
              alt="BBC Introducing"
            />
          </a>
        </Grid>
        <Grid xs={12} md={10} item>
          <Grid item container xs={12} className={styles.subCoverTitle}>
            <a
              href="https://www.bbc.co.uk/programmes/p08kqbxv"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageHyperlink}
            >
              BBC INTRODUCING FEATURE: ZEFER - STEPPIN’ (FEAT. T-AY-O) /
              25.07.20
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
