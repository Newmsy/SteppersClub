import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { HomepageCard } from './homepageCard'

const useStyles = makeStyles({
    gridMainContentWrapper: {
        width: '100%',
        //backgroundColor: 'white',
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        marginTop: -100
    },
    gridItemWrapper: {
       
    },
    gridItemTextWrapper: {
        textAlign: 'center'
    },
    gridEmailWrapper: {
        justifyContent: 'center'
    },
    logoImage: {
        width: '30%',
        marginLeft: '35%'
    },
    homepageJoinMailing: {
        
    },
    signupTextBox: {
        width: '300px',
        height: '30px',
        border: 0,
        borderBottom: '2px solid black',
        outline: 0,
        fontSize: '1.3rem',
        color: 'black',
        padding: '7px 0',
        background: 'transparent',
        transition: 'border-color 0.2s',
        '&::placeholder': {
            color:'black',
            textAlign: 'center'
        },
        '&:focus': {
            borderBottom: '4px solid black',
        }
    },
    socialMediaImage: {
        width: '100%'
    },
    gridSocialsWrapper: {
        justifyContent: 'center',
        marginTop: 10
    }
});
  
export function Home() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <Grid item xs={12} className={styles.gridItemWrapper}>
                <img src='/Assets/Images/favicon.png' className={styles.logoImage}/>
            </Grid>
            <Grid item xs={12} className={styles.gridItemTextWrapper}>
                <h2 className={styles.homepageJoinMailing}>Join the club</h2>
            </Grid>
            <Grid item container={12} className={styles.gridEmailWrapper}>
                <Grid item>
                <input type="text" id="email_signup" name="email_signup" placeholder="email" className={styles.signupTextBox}/>
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2} className={styles.gridSocialsWrapper}>
                <Grid item xs={1}><a href='#'><img src='/Assets/Images/facebookIcon.png' className={styles.socialMediaImage}/></a></Grid>
                <Grid item xs={1}><a href='#'><img src='/Assets/Images/twitterIcon.png' className={styles.socialMediaImage}/></a></Grid>
                <Grid item xs={1}><a href='#'><img src='/Assets/Images/soundcloudIcon.png' className={styles.socialMediaImage}/></a></Grid>
                <Grid item xs={1}><a href='#'><img src='/Assets/Images/instagramIcon.png' className={styles.socialMediaImage}/></a></Grid>
            </Grid>
        </Grid>
    )
  }

 