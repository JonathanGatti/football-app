import React from 'react';
import SearchPlayerForm from './SearchPlayerForm';


function Player(props) {
  const {name} = props.player
  return (
    <div>
      {name ? name : <SearchPlayerForm />}
    </div>
  )
}

export default Player;