import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100%',
        marginTop: 0,
        marginBottom: -20,
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
        zIndex: 5,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        [theme.breakpoints.down('md')]: {
            width: '25%',
        },
        [theme.breakpoints.up('md')]: {
            width: '15%',
            
        }
    },
    goHomeGrid: {
        position: 'relative',
        bottom: 100,
        transition: '0.3s',
        textDecoration: 'none',
        marginLeft: '47%',
        backgroundColor: 'white',
        color: 'rgb(42, 0, 141)',
        borderWidth: 2,
        borderRadius: 25,
        width: 80,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'rgb(42, 0, 141)',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(42, 0, 141, 0.2), 0 6px 20px 0 rgba(42, 0, 141, 0.19)',
        zIndex: 0,
        [theme.breakpoints.down('md')]: {
            visibility: 'hidden'
        },
    },
    goHomeText: {
        textDecoration: 'none',
        fontWeight: 800,
        position: 'relative',
        bottom: 8
    },
    goHomeLink: {
        "&:hover ~ $goHomeGrid": {
            transform: 'translate(90px,0px)',
        },
        width:0,
        height: 0,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            left: '25%'
        },
        [theme.breakpoints.down('md')]: {
            left: '37.5%'
        },
        [theme.breakpoints.up('md')]: {
            left: '42.5%',
        }
    }
}));
  
export function LogoMain() {
    const styles = useStyles();
    const [showText, setShowText] = useState(false)
    
    return (
        <Grid item container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <a href='/'  className={styles.goHomeLink} onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
                    <img src='/Assets/Images/favicon.png' alt="Steppers Club" className={styles.logoImage} />
                </a>
                <div className={styles.goHomeGrid} style={showText? {}: {visibility:'hidden'}}>
                        <p className={styles.goHomeText}>Home</p> 
                </div>
            </Grid>
                        
        </Grid>
    )
  }

 