import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { TeamContext } from './contexts/TeamContexts';
import { FormContext } from './contexts/FormContext';


function PlayersList(props){
  const {updateTeam} = useContext(TeamContext)
  const {isFormShowing, toggleForm} = useContext(FormContext)
  function handleClick(player, i){
    updateTeam(player, i);
  }
  return (
    <div>
      <List>
        {props.players.map((player) => (
          <>
            <ListItem 
              key={player.player_id}
              button
              onClick={() => handleClick(player, props.idx)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              {player.player_name}
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  )
}

export default PlayersList;