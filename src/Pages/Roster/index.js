import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { LogoMain } from "../LogoMain";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: 50,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    marginBottom: 100,
  },
  gridContentWrapper: {
    justifyContent: "center",
    position: "relative",
  },
  gridItemWrapper: {},
  rosterHeader: {
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
  rosterWrapper: {
    backgroundColor: "rgb(255, 209, 76)",
    minHeight: 200,
    borderRadius: 30,
    boxShadow: "2px 2px 2px 2px rgb(42, 0, 141)",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  rosterNameWrapper: {
    textAlign: "center",
    color: "rgb(42, 0, 141)",
    textShadow: "1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)",
    fontWeight: 700,
    fontSize: 30,
  },
  rosterImageWrapper: {},
  rosterImage: {
    width: "100%",
  },
  rosterBioWrapper: {
    marginBottom: 30,
    fontFamily: "Kingthings",
    color: "rgb(42, 0, 141)",
    fontSize: 20,
  },
}));

export function Roster() {
  const styles = useStyles();
  const [oneIn, setOneIn] = useState(false);
  const [twoIn, setTwoIn] = useState(false);
  const [threeIn, setThreeIn] = useState(false);
  const [fourIn, setFourIn] = useState(false);

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1 className={styles.rosterHeader}>Roster</h1>
      </Grid>
      <Grid item container xs={12} className={styles.gridContentWrapper}>
        <Slide
          direction="right"
          in={true}
          unmountOnExit
          timeout={250}
          onEntered={() => setOneIn(true)}
        >
          <div></div>
        </Slide>
        <Slide
          direction="right"
          in={true}
          unmountOnExit
          timeout={500}
          onEntered={() => setTwoIn(true)}
        >
          <div></div>
        </Slide>
        <Slide
          direction="right"
          in={true}
          unmountOnExit
          timeout={750}
          onEntered={() => setThreeIn(true)}
        >
          <div></div>
        </Slide>
        <Slide
          direction="right"
          appear={true}
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
          onEntered={() => setFourIn(true)}
        >
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            spacing={2}
            className={styles.rosterWrapper}
          >
            <Grid item xs={12} md={2} className={styles.rosterNameWrapper}>
              Sensa
            </Grid>
            <Grid item xs={12} md={4} className={styles.rosterImageWrapper}>
              <img
                src="/Assets/Images/sensaRosterImage.jpg"
                alt="sensa roster"
                className={styles.rosterImage}
              />
            </Grid>
            <Grid item xs={10} md={6} className={styles.rosterBioWrapper}>
              Sensa has emerged as one of the brightest talents in UK Garage
              since his breakout Nao - Bad Blood edit in 2019. Having firmly
              established his signature production style early on in his
              artistic growth, Sensa has continued to deliver banger after
              banger to his fast growing audience and seems to get better with
              every piece of music he releases. ‘Long Day’ marked not only the
              opening of ‘First Steps,’ but furthermore the label as a whole,
              introducing the wider project with arguably his strongest track
              yet.{" "}
            </Grid>
          </Grid>
        </Slide>
        <Slide
          direction="right"
          appear={true}
          in={oneIn}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            spacing={2}
            className={styles.rosterWrapper}
          >
            <Grid item xs={12} md={2} className={styles.rosterNameWrapper}>
              Zefer
            </Grid>
            <Grid item xs={12} md={4} className={styles.rosterImageWrapper}>
              <img
                src="/Assets/Images/zeferRosterImage.jpg"
                alt="zefer roster"
                className={styles.rosterImage}
              />
            </Grid>
            <Grid item xs={10} md={6} className={styles.rosterBioWrapper}>
              {" "}
              Zefer has experienced a fast rise in the UK Garage scene over the
              past 12 months, with support across both mainstream and niche
              radio stations such as BBC Introducing and Rinse FM (amongst
              others). Having established himself with a run of strong releases
              during the back end of 2019, Zefer has continued to push his sound
              throughout this year, with ‘Steppin’ marking the start of his new
              direction of funk and soul inspired Garage that we’re sure to see
              more of on Steppers Club in the near future.{" "}
            </Grid>
          </Grid>
        </Slide>
        <Slide
          direction="right"
          in={twoIn}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            spacing={2}
            className={styles.rosterWrapper}
          >
            <Grid item xs={12} md={2} className={styles.rosterNameWrapper}>
              Oppidan
            </Grid>
            <Grid item xs={12} md={4} className={styles.rosterImageWrapper}>
              <img
                src="/Assets/Images/oppidanRosterImage.jpg"
                alt="oppidan roster"
                className={styles.rosterImage}
              />
            </Grid>
            <Grid item xs={10} md={6} className={styles.rosterBioWrapper}>
              Oppidan’s affiliation with Steppers Club came off the back of a
              breakout 6 month run of releases in 2020, where the Bristol based
              UKG and Bass artist firmly established herself in the wider UK
              dance music scene. After the iconic ‘Hoover Dub’ put her name on
              the map, Oppidan has gone from strength to strength showing
              versatility in her ability to produce anything from big room bass
              fuelled stompers to melodic soul driven bangers. The label
              welcomed her with an impressive debut track ‘Rewind’ on the groups
              debut release, First Steps.
            </Grid>
          </Grid>
        </Slide>
        <Slide
          direction="right"
          in={threeIn}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            spacing={2}
            className={styles.rosterWrapper}
          >
            <Grid item xs={12} md={2} className={styles.rosterNameWrapper}>
              Minista
            </Grid>
            <Grid item xs={12} md={4} className={styles.rosterImageWrapper}>
              <img
                src="/Assets/Images/ministaRosterImage.jpg"
                alt="minista roster"
                className={styles.rosterImage}
              />
            </Grid>
            <Grid item xs={10} md={6} className={styles.rosterBioWrapper}>
              Hailing from the capital, Minista has shown a level of consistency
              unmatched by most in UK Garage and House music. As one of the
              strongest producers in the genre at a technical and creative
              level, the Minista sound has become a regular feature in UKG mixes
              over the past 12 months, be it in clubs, online or on national
              radio. His first contribution to Steppers Club, ‘Dopamine,’
              provides a continuation to this consistency, and displays further
              indication that Minista is only just getting started on his
              journey to the top.{" "}
            </Grid>
          </Grid>
        </Slide>
        <Slide
          direction="right"
          in={fourIn}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            spacing={2}
            className={styles.rosterWrapper}
          >
            <Grid item xs={12} md={2} className={styles.rosterNameWrapper}>
              Sam Deeley
            </Grid>
            <Grid item xs={12} md={4} className={styles.rosterImageWrapper}>
              <img
                src="/Assets/Images/samRosterImage.jpg"
                alt="sam deeley roster"
                className={styles.rosterImage}
              />
            </Grid>
            <Grid item xs={10} md={6} className={styles.rosterBioWrapper}>
              Oxford based producer Sam Deeley has marked his place as a bright
              spark in UK Garage over the past year, with tracks such as ‘Rinse
              Sound’ gaining support from some of the heavy weights in the
              genre. His music has received extensive radio play across radio
              stations Rinse FM and BBC Introducing. Regularly seen to be
              tearing it up on the club circuit in his hometown, Sam draws from
              a range of inspirations in his music which can be seen on his
              first Steppers Club release ‘2094’ - a track that blends hitting
              breaks with futuristic and melodic synths.
            </Grid>
          </Grid>
        </Slide>
      </Grid>
    </Grid>
  );
}
