import React, { useContext, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { TeamContext } from './contexts/TeamContexts';
import { FormContext } from './contexts/FormContext';
import CreateTeam from './CreateTeam';


function PlayersList(props){
  const {players} = props
  const {teamPlayers, updateTeam, createTeamPlayers} = useContext(TeamContext)
  const {toggleForm} = useContext(FormContext)

  function handleClick(player, i){
      updateTeam(player, i);
    toggleForm();
  }
  
  return (
    <div>
      <List>
        {players.map((player) => (
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