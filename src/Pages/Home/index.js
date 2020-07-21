import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmailCapture from './emailCapture';
import { LogoMain } from '../LogoMain';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
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
        textAlign: 'center',
        zIndex:1
    },
    gridEmailWrapper: {
        justifyContent: 'center',
        zIndex:0,
        marginTop: -100,
        marginBottom: -50,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-5vh',
            marginBottom: -10,
            marginTop: -50,
        },
        [theme.breakpoints.down(481)]: {
            right: 16
        },
        [theme.breakpoints.down(768)]: {
            marginTop: -50,
            marginBottom: 10
        },
    },
    homepageJoinMailing: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700
    },
    joinMailingText:{
        fontSize: 20,
        fontFamily: 'PixelLove',
        color:'black',
        textAlign: 'center',
        textDecoration: 'none'
    },
    socialMediaImageFacebook: {
        width: '95%',
        minWidth: 40
    },
    socialMediaImageSoundcloud: {
        width: '90%',
        position: 'relative',
        top: '2.25%',
        minWidth: 40
    },
    socialMediaImageInstagram: {
        width: '86%',
        position: 'relative',
        top: '4%',
        minWidth: 40,
        left:'6%'
    },
    gridSocialsWrapper: {
        justifyContent: 'center',
        marginTop: 10,
        zIndex:1,
        marginBottom: 50
    },
    linkGridItem: {
        textAlign: 'center'
    },
    gridLinksWrapper: {
        marginTop: 0,
        zIndex: 1
    },
    gridContactWrapper: {
        justifyContent: 'center',
        zIndex: 1,
        textAlign: 'center',
        marginBottom: 30    
    },
    homepageLinkText: {
        textDecoration: 'none',
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 30
        }
    },
    homepageLinkImage: {
        
    },
    homepageImageButton: {
        '&:active': {
            width: '75%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            '&:active': {
                width: '55%',
                marginTop: '2%'
            },
        },
    },
    homepageImageButtonSmall: {
        width: '100%',
        '&:active': {
            width: '95%',
            marginTop: '2%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            '&:active': {
                width: '55%',
                marginTop: '2%'
            },
        },
    }
}));
  
export function Home() {
    const styles = useStyles();
    
    return (
        <Fade in={true} timeout={500}>
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item container xs={12} lg={8}  className={styles.gridLinksWrapper}>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/releases' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="RELEASES" src='/Assets/Images/releases.png'/></a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/press' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="PRESS" src='/Assets/Images/press.png'/></a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/videos' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="VIDEOS" src='/Assets/Images/videos.png'/></a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/events' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="EVENTS" src='/Assets/Images/events.png'/></a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/shop' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="SHOP" src='/Assets/Images/shop.png'/></a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.linkGridItem}>
                    <a href='/roster' className={styles.homepageLinkImage}><img className={styles.homepageImageButton} alt="ROSTER" src='/Assets/Images/roster.png'/></a>
                </Grid>
            </Grid>
            <Grid item xs={12} className={styles.gridItemTextWrapper}>
                <Fade in={true} timeout={2000}>
                    <h2 className={styles.homepageJoinMailing}>JOIN THE CLUB:</h2>
                </Fade>
            </Grid>
            <Grid item container xs={12} className={styles.gridEmailWrapper}>
                <Fade in={true} timeout={3000}>
                    <Grid item>
                        <EmailCapture/>
                    </Grid>
                </Fade>
            </Grid>
            <Grid item container xs={12} sm={8} spacing={2} className={styles.gridSocialsWrapper}>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.facebook.com/steppersclub/?__tn__=%2Cd%2CP-R&eid=ARDXn9RqkkPteWYgjOKLRrpdacbClosDVzoLDJUeXfWFVqT96vg1kiHco-9zT0PJE-kVRxsXjQEhj_XO'><img src='/Assets/Images/facebookIcon.png' alt="FACEBOOK" className={styles.socialMediaImageFacebook}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://www.instagram.com/steppersclub_/'><img src='/Assets/Images/instagramLogo.png' alt="INSTAGRAM" className={styles.socialMediaImageInstagram}/></a></Grid>
                <Grid item xs={3} sm={2} md={1}><a href='https://soundcloud.com/steppersclub'><img src='/Assets/Images/soundcloudLogo.png' alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud}/></a></Grid>
            </Grid>
            <Grid item xs={12} container className={styles.gridContactWrapper}>
                <Grid item xs={8} sm={4} md={2} lg={1} className={styles.gridContactWrapper}>
                    <a href='/contact' className={styles.homepageLinkImage}><img className={styles.homepageImageButtonSmall} alt="CONTACT" src='/Assets/Images/contact.png'/></a>
                </Grid>
            </Grid>
        </Grid>
        </Fade>
        
    )
  }

 