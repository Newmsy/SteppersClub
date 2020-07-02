import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridContentWrapper: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <Grid item xs={8}>
                { props.children }
            </Grid>
        </Grid>
    )
  }