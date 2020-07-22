import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridContentWrapper: {
        position:'relative',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    },
    comingSoonGif: {
        height: '100vh'
    },
    comingSoonGifWrapper: {
        //boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.2), 0px 0px 10px 10px rgba(255, 255, 255, 0.2)',
        height: '100vh',
        marginTop: 30,
    },
    soundcloudHidden: {
        display: 'none'
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <Grid item xs={8} sm={8}>
                { props.children }
            </Grid>
        </Grid>
    )
  }

