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
    }
}));
  
export function Press() {
    const styles = useStyles();
    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            Someone please interview me
        </Grid>
        
    )
  }

 