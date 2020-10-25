import React, {useContext} from 'react';
import { PlayerInfoContext } from './contexts/PlayerInfoContext';
import { FormContext } from './contexts/FormContext';

import SearchPlayerForm from './SearchPlayerForm';
import PlayerCard from './PlayerCard';
import PlayerInfo from './PlayerInfo';

function Player(props) {
  const {player} = props
  const {isFormShowing} = useContext(FormContext);
  const {isPlayerInfoShowing} = useContext(PlayerInfoContext);

  return (
    <div>
      {
      isFormShowing ? 
        <SearchPlayerForm idx={props.idx} open={isFormShowing}/>
      : 
      <>
      { 
      isPlayerInfoShowing ? 
      <PlayerInfo player={player} open={isPlayerInfoShowing}/> 
      : 
      <PlayerCard player={player}/>
      }   
      </>
      }  
    </div>
  )
}

export default Player;