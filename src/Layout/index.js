import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    gridContentWrapper: {
        position:'relative',
        width: '100%',
        backgroundColor: 'rgb(255,209,76)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    steppersToolbarHeader: {
        fontsize: 30,
        color: 'white'
    },
    comingSoonGif: {
        height: '100vh'
    },
    comingSoonGifWrapper: {
        //boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.2), 0px 0px 10px 10px rgba(255, 255, 255, 0.2)',
        height: '100vh',
        marginTop: 30,
    },
    soundcloudHidden: {
        display: 'none'
    }
});
  

  
export const Layout = (props) => {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridContentWrapper}>
            <Grid item xs={8}>
                { props.children }
            </Grid>
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