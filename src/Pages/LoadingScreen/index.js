import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Theme from '@material-ui/core';
import { LogoMain } from '../LogoMain';
import LinearProgress from '@material-ui/core/LinearProgress'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100vw',
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        backgroundColor: 'black'
    },
    root: {
        width: '100%',
        zIndex: 5,
        marginTop: -100
    },
    bar: {
        width: '60vw',
        height: 20,
        backgroundColor: 'rgb(42,0,141)',
        color: 'black',
        borderRadius: 5,
    },
    loadingGifGrid: {
        backgroundImage: 'url(/Assets/Images/ComingSoonGif.gif)',
        width: '100vw',
        height: '100vh',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}));
  
const theme = createMuiTheme({
    palette: {
        secondary: {
          main: 'rgb(255,209,76)'
        }
      }
  });

export function LoadingScreen() {
    const styles = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            const diff = 1;
            return Math.min(oldProgress + diff, 100);
        });
        }, 15);

        return () => {
        clearInterval(timer);
        };
    }, []);

    const Redirect = () => {
        setTimeout(
            () => window.location.href='/home',
            2200
        )
    }

    window.onLoad = Redirect();

    

    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item className={styles.loadingGifGrid}>
            </Grid>
            <Grid item>
            <div className={styles.root}><ThemeProvider theme={theme}>
            <LinearProgress variant="determinate" value={progress} className={styles.bar} color="secondary"/>
    </ThemeProvider>
           
            </div>
            </Grid>
        </Grid>
        
    )
  }

 