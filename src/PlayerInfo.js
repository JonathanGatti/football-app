import React from 'react';

function PlayerInfo(props){
  const {player_name, age, position, birth_country, birth_date} = props.player;
  return (
    <div>
      <p>{player_name}</p>
      <p>{age}</p>
      <p>{position}</p>
      <p>{birth_date}</p>
      <p>{birth_country}</p>
    </div>
  )
}

export default PlayerInfo;