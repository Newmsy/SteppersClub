import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles({
    gridToolbarWrapper: {
        width: '100%',
        backgroundColor: 'rgb(255,209,76)',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: '0'
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
        <Grid item xs={4} sm={1}>
            <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
        </Grid>
        <Grid item xs={4} sm={1}>
            <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
        </Grid>
        <Grid item xs={4} sm={1}>
            <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
        </Grid>
        <Hidden xsDown>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
            <Grid item xs={4} sm={1}>
                <img src='/Assets/Images/Logo.png' className={styles.steppersToolbarLogo}/>
            </Grid>
        </Hidden>
    </Grid>
    )
  }