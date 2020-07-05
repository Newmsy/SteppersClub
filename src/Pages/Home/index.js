import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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
    gridItemTextWrapper: {
        textAlign: 'center'
    },
    gridEmailWrapper: {
        justifyContent: 'center'
    },
    logoImage: {
        width: '15%',
        marginLeft: '42.5%'
    },
    homepageJoinMailing: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700
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
            textAlign: 'center',
            fontFamily: 'PixelLove'
        },
        '&:focus': {
            borderBottom: '4px solid black',
        }
    },
    socialMediaImageFacebook: {
        width: '105%',
        minWidth: 40
    },
    socialMediaImageSoundcloud: {
        width: '96.5%',
        position: 'relative',
        top: '2.25%',
        minWidth: 40
    },
    socialMediaImageInstagram: {
        width: '92%',
        position: 'relative',
        top: '4%',
        minWidth: 40,
        left:'6%'
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
                <h2 className={styles.homepageJoinMailing}>JOIN THE CLUB</h2>
            </Grid>
            <Grid item container={12} className={styles.gridEmailWrapper}>
                <Grid item>
                <input type="text" id="email_signup" name="email_signup" placeholder="email" className={styles.signupTextBox}/>
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2} className={styles.gridSocialsWrapper}>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.facebook.com/steppersclub/?__tn__=%2Cd%2CP-R&eid=ARDXn9RqkkPteWYgjOKLRrpdacbClosDVzoLDJUeXfWFVqT96vg1kiHco-9zT0PJE-kVRxsXjQEhj_XO'><img src='/Assets/Images/facebookIcon.png' className={styles.socialMediaImageFacebook}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.instagram.com/steppersclub_/'><img src='/Assets/Images/instagramLogo.png' className={styles.socialMediaImageInstagram}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://soundcloud.com/steppersclub'><img src='/Assets/Images/soundcloudLogo.png' className={styles.socialMediaImageSoundcloud}/></a></Grid>
            </Grid>
        </Grid>
    )
  }

 