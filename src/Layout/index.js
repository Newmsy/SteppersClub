import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    gridContentWrapper: {
        position:'relative',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/Assets/Images/testBackgroundImage.jpg)',
        backgroundSize: '100% 100%',
        minHeight: 'calc(100vh - 80px)'
    },
    gridLayoutWrapper: {
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 70,
        //background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)',
        //boxShadow: '0px 0px 10px 10px rgba(255, 209, 76 ,0.5)'
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <Grid item xs={11} sm={6} className={styles.gridLayoutWrapper}>
                { props.children }
            </Grid>
        </Grid>
    )
  }

