import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { HomepageCard } from './homepageCard'

const useStyles = makeStyles({
    gridMainContentWrapper: {
        height: 100,
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 100,
        direction: 'column',
        justifyContent: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 40,
        color: 'black'
    },
    comingSoonGif: {
        width: '100%'
    }
});
  
export function Home() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item>
               
            </Grid>
        </Grid>
    )
  }

 //<img src='/Assets/Images/ComingSoonGif.gif' className={styles.comingSoonGif}/>
{/* <HomepageCard>
                <Grid item>
                    <h1 className={styles.steppersToolbarHeader}>Coming soon...</h1>
                </Grid>
                <Grid item>
                    <img src='/Assets/Images/ComingSoonGif.gif'/>
                </Grid>
            </HomepageCard> */}