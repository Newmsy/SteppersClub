import React from 'react';
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
    },
    pressHeader: {
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700
    },
    eventsComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700
    },
    eventsComingSoonWrapper: {
        textAlign: 'center'
    },
}));
  
export function Press() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item xs={12} style={{textAlign:'center'}}>
                <h1 className={styles.pressHeader}>Press</h1>
            </Grid>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.eventsComingSoonWrapper}>
                    <h1 className={styles.eventsComingSoonText}>COMING SOON</h1>
                </Grid>
            </Grid> 
        </Grid>
        
    )
  }

 