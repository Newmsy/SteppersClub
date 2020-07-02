import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridCardWrapper: {
        width: '100%',
        backgroundColor: 'grey',
        minHeight: 300,
        justifyContent: 'center',
        borderRadius: 50
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