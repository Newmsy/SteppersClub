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
        marginBottom: 100
    },
    gridItemWrapper: {
       
    },
    releaseItemGrid: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 0
    },
    soundcloudItem: {
        marginTop: 20
    },
    firstStepsAlbumCover: {
        width: '100%',
        height: '100%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        position: 'relative',
    },
    subCoverTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 10
    },

}));
  
export function Releases() {
    const styles = useStyles();
    
    return (
        
            <Grid container className={styles.gridMainContentWrapper}>
                <LogoMain/>
                
                <Grid item  container xs={8} className={styles.releaseItemGrid}>
                       <img className={styles.firstStepsAlbumCover} src="/Assets/Images/first_steps_cover.jpg" alt="First Steps"/>
                </Grid>
                <Grid item container xs={8} className={styles.subCoverTitle}>
                    OUT ON ALL PLATFORMS AUGUST 21
                </Grid>
                
            </Grid>
        
    )
  }


//   <Grid item xs={12} sm={8} className={styles.soundcloudItem}>
//                     <Fade in={true} timeout={2000}>
//                         <iframe title="SoundcloudExample" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/848565127&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
//                         </iframe>
//                     </Fade>
//                 </Grid>
 