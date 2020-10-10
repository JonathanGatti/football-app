import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { TeamContext } from './contexts/TeamContexts';


function Team(){
  const {team} = useContext(TeamContext)
  return(
      <Paper>
        <Grid container>
        {team.map(player => (
          <Grid item>
            <Player player={player}/>
          </Grid>
        ))
      }
        </Grid>
      </Paper>
  )
}

export default Team;