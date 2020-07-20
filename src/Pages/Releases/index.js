import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LogoMain } from '../LogoMain';

const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100%',
        marginTop: 50,
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
    },
    gridItemWrapper: {
       
    },
    releaseItemGrid: {
        backgroundColor: 'black',
        height: 300,
        textAlign: 'center',
        color: '#fff'
    },
    soundcloudItem: {
        marginTop: 20
    }
}));
  
export function Releases() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item  container xs={8} className={styles.releaseItemGrid}>
                <Grid item xs={12}>First Release Cover Here</Grid>
            </Grid>
            <Grid item xs={8}>
                SOME LINKS TO STUFF
            </Grid>
            <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/848565127&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                </iframe>
            </Grid>
        </Grid>
        
    )
  }

 