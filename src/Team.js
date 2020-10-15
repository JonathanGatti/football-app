import React, { useContext } from 'react';
import background from './imgs/background.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { TeamContext } from './contexts/TeamContexts';
import { FormContextProvider } from './contexts/FormContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerContainer : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  const {team, getPosition} = useContext(TeamContext)

  return(
      <Paper className={classes.root}>
        <Typography className={classes.title} variant='h3'>The Football App</Typography>
        <Grid container className={classes.container}spacing={4}>
        {team.map((player, i) => (
          <FormContextProvider>
            <Grid className={classes.playerContainer} item xs={getPosition(player.position)}>
              <Paper className={classes.paper}>
                <Player idx={i} player={player} />
              </Paper>
            </Grid>
          </FormContextProvider>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;