import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { LookbookCarousel } from "../Shop/carousel";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: -30,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
  },
  gridItemWrapper: {},
  eventsComingSoonText: {
    color: "rgb(40,0,122)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(40,0,122)",
    fontWeight: 700,
  },
  headerWrapper: {
    textAlign: "center",
  },
  eventsHeader: {
    color: "rgb(40,0,122)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(40,0,122)",
    fontWeight: 700,
  },
  lookbookHeader: {
    maxWidth: "100%",
    marginBottom: 10,
  },
}));

export function Lookbook() {
  const styles = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <img
          src="/Assets/Images/Shop/storepic.png"
          alt="lookbook"
          className={styles.lookbookHeader}
          style={{
            width: "80%",
            marginLeft: "0",
            marginBottom: 30,
            height: "100%",
          }}
        />
      </Grid>
      <Grid xs={12} />
      <Grid item xs={3} style={{ textAlign: "center", marginTop: 15, marginBottom: -15 }}>
        <img src="/Assets/Images/lookbook.png" alt="lookbook" className={styles.lookbookHeader} />
      </Grid>

      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <Grid item xs={12} className={styles.headerWrapper}>
          <Grid xs={12}>
            <LookbookCarousel />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={styles.gridItemWrapper} style={{ justifyContent: "center", marginBottom: 50 }}>
        <Grid item xs={4} className={styles.headerWrapper}>
          <Grid xs={12}>
            <a href="/shop">
              <img src="/Assets/Images/Shop/ReturnToStore.png" style={{ width: "100%" }} />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
