import React, { useContext } from 'react';
import background from './imgs/background.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { TeamContext } from './contexts/TeamContexts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerContainer : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    width: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Team(){
  const classes = useStyles();
  const {team, getType} = useContext(TeamContext)

  return(
      <Paper className={classes.root}>
        <Grid container className={classes.container}spacing={4}>
        {team.map(player => (
          <Grid className={classes.playerContainer} item xs={getType(player.type)}>
            <Paper className={classes.paper}>
              <Player player={player}/>
            </Paper>
          </Grid>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;