import React, {useContext} from 'react';
import SearchPlayerForm from './SearchPlayerForm';
import { FormContext } from './contexts/FormContext';
import Button from '@material-ui/core/Button';


function Player(props) {
  const {player_name} = props.player;
  const {isFormShowing, toggleForm} = useContext(FormContext);

  return (
    <div>
        <Button onClick={toggleForm}>
        {isFormShowing ? <SearchPlayerForm idx={props.idx}/> : player_name}
        </Button>
    </div>
  )
}

export default Player;