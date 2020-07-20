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
    },
    toolbarLogoDiv: {
        width: '100vw',
        backgroundImage: 'url(/Assets/Images/logoLeftToRight.gif)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        height: 40,
        backgroundPosition: 'bottom',
        '&:hover': {
            backgroundImage: 'url(/Assets/Images/logoRightToLeft.gif)',
        },
    }
}));
  
export function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <div className={styles.toolbarLogoDiv}>

            </div>
        </Grid>
    )
  }