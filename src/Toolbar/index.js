import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    gridToolbarWrapper: {
        width: '100vw',
        backgroundColor: 'rgb(255,209,76)',
        flexDirection: 'row'
    },
    steppersToolbarLogo: {
        [theme.breakpoints.down('md')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '50vw',
        },
    },
    toolbarLogoDivLR: {
        width: '100vw',
        backgroundImage: 'url(/Assets/Images/logoLeftToRight.gif)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        height: 40,
        [theme.breakpoints.down('md')]: {
            backgroundSize: 'auto 100%',
            height: 25,
        }
    },
    toolbarLogoDivRL: {
        width: '100vw',
        backgroundImage: 'url(/Assets/Images/logoRightToLeft.gif)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        height: 40,
        [theme.breakpoints.down('md')]: {
            backgroundSize: 'auto 100%',
            height: 25,
        }
    }
}));
  
export function Toolbar() {
    const styles = useStyles();
    const [directionLR, setDirectionLR] = useState(true)
    return (
        <Grid container className={styles.gridToolbarWrapper}>
            <div className={directionLR? styles.toolbarLogoDivLR : styles.toolbarLogoDivRL} onMouseEnter={() => setDirectionLR(!directionLR)}>

            </div>
        </Grid>
    )
  }