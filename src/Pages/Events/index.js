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
    eventsComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700,
    },
    eventsComingSoonWrapper: {
        textAlign: 'center'
    }
}));
  
export function Events() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.eventsComingSoonWrapper}>
                    <h1 className={styles.eventsComingSoonText}>COMING SOON</h1>
                </Grid>
            </Grid>            
        </Grid>
        
    )
  }

 