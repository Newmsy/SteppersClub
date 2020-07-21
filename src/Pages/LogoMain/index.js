import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
       zIndex: 1
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
    },
    goHomeGridHidden: {
        position: 'relative',
        bottom: 50,
        transition: '2s'
    },
    goHomeGridShow: {
        position: 'relative',
        bottom: 50,
        left: 200,
        transition: '2s'
    }
}));
  
export function LogoMain() {
    const styles = useStyles();
    const [showText, setShowText] = useState(false)
    
    return (
        <Grid item container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <a href='/'><img src='/Assets/Images/favicon.png' alt="Steppers Club" className={styles.logoImage} onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}/></a>
            </Grid>
            <Grid item className={showText? styles.goHomeGridShow: styles.goHomeGridHidden}>
                Go Home    
            </Grid>            
        </Grid>
    )
  }

 