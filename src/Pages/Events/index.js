import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
    },
    logoImage: {
        width: '15%',
        marginLeft: '42.5%'
    }
}));
  
export function Events() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
            <a href='/'><img src='/Assets/Images/favicon.png' className={styles.logoImage}/></a>
            </Grid>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.eventsComingSoonWrapper}>
                    <h1 className={styles.eventsComingSoonText}>COMING SOON</h1>
                </Grid>
            </Grid>            
        </Grid>
        
    )
  }

 