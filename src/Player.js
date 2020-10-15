import React, {useContext} from 'react';
import SearchPlayerForm from './SearchPlayerForm';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormContext } from './contexts/FormContext';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core/';
import { PlayerInfoContext } from './contexts/PlayerInfoContext';
import PlayerInfo from './PlayerInfo';

function Player(props) {
  const {player} = props
  const {player_name, position} = props.player;
  const {isFormShowing, toggleForm} = useContext(FormContext);
  const {playerInfo, showPlayerInfo} = useContext(PlayerInfoContext)

  return (
    <div>
      {
      isFormShowing ? <SearchPlayerForm idx={props.idx}/>
      : 
      <>
      { playerInfo ? <PlayerInfo player={player}/> : 
        <Card>
        <CardContent>
          <Typography >{player_name}</Typography>
          <Typography >{position}</Typography>
          </CardContent>
        <CardActions>
          <Button size='small' onClick={toggleForm}>Edit</Button>
          <Button size='small' onClick={showPlayerInfo}>More</Button>
        </CardActions>
      </Card>
      }   
      </>
      }  
    </div>
  )
}

export default Player;