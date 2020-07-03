import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridCardWrapper: {
        width: '100%',
        backgroundColor: 'rgb(190, 190, 190)',
        minHeight: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.5), 0px 0px 10px 10px rgba(255, 255, 255, 0.5)',
        direction: 'column'
    }
});
  
export const HomepageCard = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridCardWrapper} xs={12}>
            {props.children}
        </Grid>
    )
  }