import React from 'react';

function Player(props) {
  const {player_name, player_age} = props.player
  return (
    <div>
      <h1>{player_name}</h1>
      <h4>{player_age}</h4>
    </div>
  )
}

export default Player;