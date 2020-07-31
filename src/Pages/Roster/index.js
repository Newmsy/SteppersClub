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
    eventsComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700
    },
    eventsComingSoonWrapper: {
        textAlign: 'center'
    },
    rosterWrapper: {
        backgroundColor: 'rgb(255, 209, 76)',
        minHeight: 200,
        borderRadius: 30,
        boxShadow: '2px 2px 2px 2px rgb(42, 0, 141)',
        marginBottom: 20
    },
    rosterNameWrapper: {
        textAlign: 'center',
        color: 'rgb(42, 0, 141)',
        textShadow: '1px 1px rgb(255, 209, 76), 2px 2px rgb(42, 0, 141)',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 70

    },
    rosterImageWrapper: {

    },
    rosterImage: {
        width:'100%'
    },
    rosterBioWrapper: {

    }
}));
  
export function Roster() {
    const styles = useStyles();
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/> 
            <Grid item container xs={10} spacing={2} className={styles.rosterWrapper}>
                    <Grid item xs={2} className={styles.rosterNameWrapper}>Zefer</Grid>
                    <Grid item xs={4} className={styles.rosterImageWrapper}><img src="/Assets/Images/PlaceholderShopImageBack.jpg" alt="" className={styles.rosterImage}/></Grid>
                    <Grid item xs={6} className={styles.rosterBioWrapper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus vel enim molestie bibendum. Pellentesque mi tortor, consectetur vel volutpat posuere, tincidunt in ante. Pellentesque pretium quis ex eu cursus. Quisque mattis posuere mollis. Quisque viverra augue ut nibh finibus finibus. Vivamus sem ex, iaculis id sapien imperdiet, facilisis laoreet ligula. Vivamus volutpat vehicula turpis a mollis. Nunc facilisis urna ut erat tempor rutrum. Nullam in ligula posuere orci feugiat pharetra. Vestibulum sed ligula id felis congue tincidunt eget ut quam. Fusce efficitur magna neque, ac sodales urna cursus at. Aliquam non aliquam lacus. Donec pharetra nisi id ipsum malesuada, nec pellentesque ipsum euismod.</Grid>
            </Grid> 
            <Grid item container xs={10} spacing={2} className={styles.rosterWrapper}>
                    <Grid item xs={2} className={styles.rosterNameWrapper}>Zefer</Grid>
                    <Grid item xs={4} className={styles.rosterImageWrapper}><img src="/Assets/Images/PlaceholderShopImageBack.jpg" alt="" className={styles.rosterImage}/></Grid>
                    <Grid item xs={6} className={styles.rosterBioWrapper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus vel enim molestie bibendum. Pellentesque mi tortor, consectetur vel volutpat posuere, tincidunt in ante. Pellentesque pretium quis ex eu cursus. Quisque mattis posuere mollis. Quisque viverra augue ut nibh finibus finibus. Vivamus sem ex, iaculis id sapien imperdiet, facilisis laoreet ligula. Vivamus volutpat vehicula turpis a mollis. Nunc facilisis urna ut erat tempor rutrum. Nullam in ligula posuere orci feugiat pharetra. Vestibulum sed ligula id felis congue tincidunt eget ut quam. Fusce efficitur magna neque, ac sodales urna cursus at. Aliquam non aliquam lacus. Donec pharetra nisi id ipsum malesuada, nec pellentesque ipsum euismod.</Grid>
            </Grid> 
            <Grid item container xs={10} spacing={2} className={styles.rosterWrapper}>
                    <Grid item xs={2} className={styles.rosterNameWrapper}>Zefer</Grid>
                    <Grid item xs={4} className={styles.rosterImageWrapper}><img src="/Assets/Images/PlaceholderShopImageBack.jpg" alt="" className={styles.rosterImage}/></Grid>
                    <Grid item xs={6} className={styles.rosterBioWrapper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus vel enim molestie bibendum. Pellentesque mi tortor, consectetur vel volutpat posuere, tincidunt in ante. Pellentesque pretium quis ex eu cursus. Quisque mattis posuere mollis. Quisque viverra augue ut nibh finibus finibus. Vivamus sem ex, iaculis id sapien imperdiet, facilisis laoreet ligula. Vivamus volutpat vehicula turpis a mollis. Nunc facilisis urna ut erat tempor rutrum. Nullam in ligula posuere orci feugiat pharetra. Vestibulum sed ligula id felis congue tincidunt eget ut quam. Fusce efficitur magna neque, ac sodales urna cursus at. Aliquam non aliquam lacus. Donec pharetra nisi id ipsum malesuada, nec pellentesque ipsum euismod.</Grid>
            </Grid> 
            <Grid item container xs={10} spacing={2} className={styles.rosterWrapper}>
                    <Grid item xs={2} className={styles.rosterNameWrapper}>Zefer</Grid>
                    <Grid item xs={4} className={styles.rosterImageWrapper}><img src="/Assets/Images/PlaceholderShopImageBack.jpg" alt="" className={styles.rosterImage}/></Grid>
                    <Grid item xs={6} className={styles.rosterBioWrapper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus vel enim molestie bibendum. Pellentesque mi tortor, consectetur vel volutpat posuere, tincidunt in ante. Pellentesque pretium quis ex eu cursus. Quisque mattis posuere mollis. Quisque viverra augue ut nibh finibus finibus. Vivamus sem ex, iaculis id sapien imperdiet, facilisis laoreet ligula. Vivamus volutpat vehicula turpis a mollis. Nunc facilisis urna ut erat tempor rutrum. Nullam in ligula posuere orci feugiat pharetra. Vestibulum sed ligula id felis congue tincidunt eget ut quam. Fusce efficitur magna neque, ac sodales urna cursus at. Aliquam non aliquam lacus. Donec pharetra nisi id ipsum malesuada, nec pellentesque ipsum euismod.</Grid>
            </Grid>           
        </Grid>
        
    )
  }

 