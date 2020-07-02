import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { HomepageCard } from './homepageCard'

const useStyles = makeStyles({
    gridMainContentWrapper: {
        height: 100,
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 100
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    }
});
  
export function Home() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <HomepageCard>
                <Grid item>
                    <h1 className={styles.steppersToolbarHeader}>Steppers</h1>
                </Grid>
            </HomepageCard>
        </Grid>
    )
  }