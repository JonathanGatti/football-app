import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button } from '@material-ui/core';

function PlayersList(props){
  return (
    <div>
      <List>
        {props.players.map(player => (
          <Button>
            <ListItem key={player.player_name}>{player.player_name}</ListItem>
          </Button>
        ))}
      </List>
    </div>
  )
}

export default PlayersList;