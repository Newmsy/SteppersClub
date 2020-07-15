import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
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
    shopComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700,
    },
    shopComingSoonWrapper: {
        textAlign: 'center'
    },
    logoImage: {
        width: '15%',
        marginLeft: '42.5%'
    }
});
  
export function Shop() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <img src='/Assets/Images/favicon.png' className={styles.logoImage}/>
            </Grid>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.shopComingSoonWrapper}>
                    <h1 className={styles.shopComingSoonText}>COMING SOON</h1>
                </Grid>
            </Grid>            
        </Grid>
        
    )
  }

 