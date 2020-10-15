import React, {useContext} from 'react';
import SearchPlayerForm from './SearchPlayerForm';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormContext } from './contexts/FormContext';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core/';
import { PlayerInfoContextProvider, PlayerInfoContext } from './contexts/PlayerInfoContext';


function Player(props) {
  const {player_name, position} = props.player;
  const {isFormShowing, toggleForm} = useContext(FormContext);

  return (
    <div>
      {
      isFormShowing ? <SearchPlayerForm idx={props.idx}/>
      : 
      <>
      <PlayerInfoContextProvider>
        <Card>
          <CardContent>
            <Typography >{player_name}</Typography>
            <Typography >{position}</Typography>
            </CardContent>
          <CardActions>
            <Button size='small' onClick={toggleForm}>Edit</Button>
            <Button size='small' >More</Button>
          </CardActions>
        </Card>
      </PlayerInfoContextProvider>
      </>
      }  
    </div>
  )
}

export default Player;