import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { TeamContext } from './contexts/TeamContexts';
import { FormContextProvider } from './contexts/FormContext';
import { PlayerInfoContextProvider } from './contexts/PlayerInfoContext';
import useStyles from './styles/TeamStyles';

function Team(props){
  const classes = useStyles();
  const {teamPlayers} = props;
  const {getPosition} = useContext(TeamContext)

  return(
      <Paper className={classes.root}>
        <Grid container className={classes.container}spacing={4}>
        {teamPlayers.map((player, i) => (
          <FormContextProvider>
            <PlayerInfoContextProvider>
              <Grid className={classes.playerContainer} item xs={getPosition(player.position)} key={i} >
                <Paper className={classes.paper}>
                  <Player idx={i} player={player} />
                </Paper>
              </Grid>
            </PlayerInfoContextProvider>
          </FormContextProvider>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;