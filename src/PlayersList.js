import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function PlayersList(props){
  return (
    <div>
      <List>
        {props.players.map(player => (
          <ListItem key={player.player_name}>{player.player_name}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default PlayersList;