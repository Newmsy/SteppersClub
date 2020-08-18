import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LogoMain } from '../LogoMain';

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
    releaseItemGrid: {
        textAlign: 'center',
        color: '#fff'
    },
    pressHeader: {
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700
    },
    eventsComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700
    },
    eventsComingSoonWrapper: {
        textAlign: 'center'
    },
    pressImageCover: {
        width: '100%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        position: 'relative',
        marginBottom: -5
    },
    pressIconGrid: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 0,
        width: '100%',
        zIndex: 500
    },
    subCoverTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 10,
        marginBottom: 30
    },
    subCoverCardsBack: {
        backgroundColor: 'rgba(255, 220, 120, 0.6)',
        minHeight: 200,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        boxShadow: '2px 2px 2px 2px rgb(42, 0, 141)',
        marginBottom: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    subCoverCardsFront: {
        backgroundColor: 'rgb(255, 209, 76)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    soundcloudItem: {
        marginTop: 30,
        marginLeft: "7.5%"
    },
    imageHyperlink: {
        width:'100%',
        marginBottom: -10,
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
    },
    subCoverCardsSolo: {
        backgroundColor: 'rgb(255, 209, 76)',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        boxShadow: '2px 2px 2px 2px rgb(42, 0, 141)',
        marginBottom: 70,
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 0,
        },
    }
}));
  
export function Press() {
    const styles = useStyles();
    
    
    return (
        <Grid container className={styles.gridMainContentWrapper} xs={12}>
            <LogoMain/>
            <Grid item xs={12} style={{textAlign:'center'}}>
                <h1 className={styles.pressHeader}>Press</h1>
            </Grid>
            <Grid xs={12} sm={10}  item container className={styles.subCoverCardsSolo}>
                <Grid xs={12} md={3}>
                    <a href="https://soundcloud.com/steppersclub/reprezent-fm-steppers-club-guest-mix-and-interview-080820-zefer-w-meltout-crew" target="_blank" rel="noopener noreferrer" className={styles.imageHyperlink}>
                        <img className={styles.pressImageCover} src="/Assets/Images/ReprezentIcon.jpeg" alt="Reprezent Radio"/>
                    </a>
                </Grid>
                <Grid xs={12} md={9} item>
                    <Grid item container xs={12} className={styles.subCoverTitle}>
                        <a href="https://soundcloud.com/steppersclub/reprezent-fm-steppers-club-guest-mix-and-interview-080820-zefer-w-meltout-crew" target="_blank" rel="noopener noreferrer" className={styles.imageHyperlink}>
                            REPREZENT FM GUEST APPEARANCE
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} sm={10} item container className={styles.subCoverCardsSolo}>
                <Grid xs={12} md={3}>
                    <a href="https://www.cygnetmagazine.co.uk/cygnet-durham/steppers-club-the-new-face-of-the-uk-garage-scene" target="_blank" rel="noopener noreferrer" className={styles.imageHyperlink}>
                        <img className={styles.pressImageCover} src="/Assets/Images/CygnetPressIcon.png" alt="Cygnet Magazine"/>
                    </a>
                </Grid>
                <Grid xs={12} md={9} item>
                    <Grid item container xs={12} className={styles.subCoverTitle}>
                        <a href="https://www.cygnetmagazine.co.uk/cygnet-durham/steppers-club-the-new-face-of-the-uk-garage-scene" target="_blank" rel="noopener noreferrer" className={styles.imageHyperlink}>
                            CYGNET MAGAZINE FEATURE
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}