import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Theme from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100%',
        marginTop: 0,
        marginBottom: 30,
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
    },
    gridItemWrapper: {
       
    },
    logoImage: {
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            marginLeft: '25%'
        },
        [theme.breakpoints.down('md')]: {
            width: '35%',
            marginLeft: '32.5%'
        },
        [theme.breakpoints.up('md')]: {
            width: '15%',
            marginLeft: '42.5%',
        }
    }
}));
  
export function LogoMain() {
    const styles = useStyles();
    
    return (
        <Grid item container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <a href='/'><img src='/Assets/Images/favicon.png' className={styles.logoImage}/></a>
            </Grid>
            <Grid item className={styles.goHome}>
                Go Home    
            </Grid>            
        </Grid>
    )
  }

 