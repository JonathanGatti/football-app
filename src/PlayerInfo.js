import React from 'react';

function PlayerInfo(props){
  const {player_name} = props;
  return (
    <div>
      <p>{player_name}</p>
    </div>
  )
}

export default PlayerInfo;