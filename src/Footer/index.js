import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles({
    gridToolbarWrapper: {
        width: '100%',
        backgroundColor: 'rgb(255,209,76)',
        position: 'absolute',
        bottom: '0'
    },
    steppersToolbarLogo: {
        width: '100%'
    }
});
  
export function Footer() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <img src='/Assets/Images/logoLeftToRight.gif' className={styles.steppersToolbarLogo}/>
        </Grid>
    )
}