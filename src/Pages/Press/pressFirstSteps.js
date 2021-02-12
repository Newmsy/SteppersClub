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

  pressHeader: {
    color: "rgb(4,44,159)",
    textShadow: "1px 1px rgb(255,255,255), 2px 2px rgb(4,44,159)",
    fontWeight: 700,
  },
}));

export function PressFirstSteps() {
  const styles = useStyles();

  return (
    <Grid container className={styles.gridMainContentWrapper} xs={12}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.pressHeader}>Press - First Steps</h1>
      </Grid>
      {PressCard(
        "https://www.beatport.com/release/first-steps/3070880",
        "BEATPORT FEATURE / 25.08.20",
        "beatportPress.png"
      )}

      {PressCard(
        "https://theseleqtas.com/steppers-club-first-steps/",
        "THE SELEQTAS REVIEW / 22.08.20",
        "selectasPress.jpg"
      )}

      {PressCard(
        "https://www.youtube.com/watch?v=Z9uGOOrBJRo",
        "3000 BASS PREMIERE: ZEFER - STEPPIN’ (FEAT. - T.AY.O) / 20.08.20",
        "3000PressImage.jpg"
      )}

      {PressCard(
        "https://www.junodownload.com/products/sensa-zefer-t-ay-o-first-steps/4695115-02/",
        "JUNO DOWNLOAD REVIEW / 20.08.20",
        "junodownloadPressIcon.jpg"
      )}

      {PressCard(
        "https://www.facebook.com/watch/?v=3162433387186205&extid=HnxgThcHFYg50RkG",
        "BASS HIVE FEATURE AND INTERVIEW: SENSA / 19.08.20",
        "BassHivePressIcon.jpg"
      )}

      {PressCard(
        "https://threethousand.co.uk/steppers-club-launch-their-label-officially-with-a-top-quality-new-compilation/?fbclid=IwAR2fke-kouwUnp8DXafq7MOyTd9oVTBIEJqb7MxJXOxiTvSDlGggij9ZqgA",
        "3000 BLOG FEATURE AND PREMIERE: OPPIDAN - REWIND / 19.08.20",
        "3080PressImage.png"
      )}

      {PressCard(
        "https://l.messenger.com/l.php?u=https%3A%2F%2Fsoundcloud.com%2Fonthewax%2Fminista-dopamine-steppers-club-otw-premiere&h=AT1lkpM-c88aUschqnYTJwM_NABZFQanrtv2B5oZc6JdXEggOu5cjQjCxz28thoeLUG7JQNKAC1Rmlvb3jJcISCVSYuM_uaVf5PeWmJf3fXChxj2rpgqy9lsLf4hA5-0SG7c-ueFABM8aAjEyz4",
        "ON THE WAX PREMIERE: MINISTA - DOPAMINE / 18.08.20",
        "WaxPressImage.png"
      )}

      {PressCard(
        "https://www.cygnetmagazine.co.uk/cygnet-durham/steppers-club-the-new-face-of-the-uk-garage-scene",
        " CYGNET MAGAZINE FEATURE / 08.10.20",
        "CygnetPressIcon.png"
      )}
      {PressCard(
        "https://www.bbc.co.uk/sounds/play/p08lyr79",
        "BBC INTRODUCING FEATURE: SAM DEELEY - 2094 / 08.08.20",
        "BBCPressImage.png"
      )}
      {PressCard(
        "https://soundcloud.com/steppersclub/reprezent-fm-steppers-club-guest-mix-and-interview-080820-zefer-w-meltout-crew",
        "REPREZENT FM GUEST APPEARANCE / 08.08.20",
        "ReprezentIcon.jpeg"
      )}
      {PressCard(
        "https://www.bbc.co.uk/programmes/p08kqbxv",
        "BBC INTRODUCING FEATURE: ZEFER - STEPPIN’ (FEAT. T-AY-O) /25.07.20",
        "BBCPressImage.png"
      )}
    </Grid>
  );
}

//{PressCard("", "", "")}
//{PressCard("", "", "")}
