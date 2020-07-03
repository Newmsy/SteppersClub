import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridToolbarWrapper: {
        height: 100,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'flex-end',
        //boxShadow: '0 4px 8px 0 rgba(255, 255, 0, 0.2), 0 6px 20px 0 rgba(255, 0, 0, 0.19)'
    },
    steppersToolbarHeaderLogo: {
        fontsize: 100,
        color: 'white'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    },
    steppersToolbarLogo: {
        width: 400
    },
    comingSoonText: {
        textAlign: 'right'
    }
});
  
export function Toolbar() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <Grid item xs={10}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2} className={styles.comingSoonText}>
                <h2 className={styles.steppersToolbarHeader}>Coming Soon...</h2>
            </Grid>
        </Grid>
    )
  }