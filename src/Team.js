import React from 'react';
import Paper from '@material-ui/core/Paper';
import Player from './Player'

function Team(){
  const players = {
    players: [1,2,3,4,5,6,7,8,9,10,11]
  } 
  return(
    <Paper>
      {players.players.map(player => (
        <Player />
      ))
    }
    </Paper>
  )
}

export default Team;