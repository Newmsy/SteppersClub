import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles({
    gridToolbarWrapper: {
        height: 75,
        width: '100%',
        backgroundColor: 'rgb(255,209,76)',
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
        width: '100%',
        maxWidth: 400
    },
    toolbarContentCenter: {
        textAlign: 'left'
    },
    toolbarContentRight: {
        textAlign: 'center'
    }
});
  
export function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={2}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
        </Grid>
    )
  }