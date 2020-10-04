import React from 'react';

function PlayersList(props){
  return (
    <div>
      <ul>
        {props.players.map(player => (
          <li>{player.player_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlayersList;