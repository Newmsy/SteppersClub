import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
    gridToolbarWrapper: {
        width: '100vw',
        backgroundColor: 'rgb(255,209,76)',
        position: 'absolute',
        bottom: '0'
    },
    steppersToolbarLogo: {
        [theme.breakpoints.down('md')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '50vw',
        },
    }
}));
  
export function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <img src='/Assets/Images/logoLeftToRight.gif' className={styles.steppersToolbarLogo}/>
            <Hidden smDown>
                <img src='/Assets/Images/logoLeftToRight.gif' className={styles.steppersToolbarLogo}/>
            </Hidden>
        </Grid>
    )
}