import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridToolbarWrapper: {
        height: 100,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'flex-end'
    },
    steppersToolbarHeaderLogo: {
        fontsize: 100,
        color: 'white'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    }
});
  
export function Toolbar() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <Grid item xs={9}>
                <h1 className={styles.steppersToolbarHeaderLogo}>Steppers Club</h1>
            </Grid>
            <Grid item xs={3}>
                <h2 className={styles.steppersToolbarHeader}>Home to all Garaj Paedophiles</h2>
            </Grid>
        </Grid>
    )
  }