import React, {useContext} from 'react';
import { PlayerInfoContext } from './contexts/PlayerInfoContext';
import { FormContext } from './contexts/FormContext';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import './styles/PlayerCard.css'


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
        <ButtonGroup aria-label="outlined primary button group">
          <Button onClick={handleClickOpen}>
            Edit
          </Button>
          <Button onClick={showPlayerInfo}>
            More
          </Button> 
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}

export default PlayerCard;