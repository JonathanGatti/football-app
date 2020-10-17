import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormContext } from './contexts/FormContext';
import { PlayerInfoContext } from './contexts/PlayerInfoContext';

function PlayerCard(props){
  const {player_name, position} = props.player;
  const {handleClickOpen} = useContext(FormContext);
  const {showPlayerInfo} = useContext(PlayerInfoContext);
  return (
    <Card>
      <CardContent>
        <Typography >{player_name}</Typography>
        <Typography >{position}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Edit
        </Button>
        <Button variant="outlined" color="primary" onClick={showPlayerInfo}>
          More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCard;