import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    gridContentWrapper: {
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    },
    comingSoonGif: {
        maxHeight: '100vh',
        maxWidth: '100vw',
    },
    comingSoonGifWrapper: {
        maxHeight: '100vh',
        maxWidth: '100vw',
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <Fade in={true} timeout={10000}>
            <div className={styles.comingSoonGifWrapper}>
                <img src='/Assets/Images/websiteComingSoonGif.gif' className={styles.comingSoonGif}/>
            </div>
            </Fade>
        </Grid>
    )
  }


//   <div className={styles.soundcloudHidden}>
//   <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
//           src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/820897819&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
//       </iframe>
//       <div>
//           <a href="https://soundcloud.com/sensasounds" title="Sensa" target="_blank">
//               Sensa
//           </a> · 
//           <a href="https://soundcloud.com/sensasounds/me-you-zefer-remix" title="Me &amp; You (Zefer Remix)" target="_blank">
//               Me &amp; You (Zefer Remix)
//           </a>
//       </div>
//   </div>