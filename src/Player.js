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
  const {isFormShowing, handleClickOpen} = useContext(FormContext);
  const {isPlayerInfoShowing, showPlayerInfo} = useContext(PlayerInfoContext);

  return (
    <div>
      {
      isFormShowing ? <SearchPlayerForm idx={props.idx} open={isFormShowing}/>
      : 
      <>
      { isPlayerInfoShowing ? <PlayerInfo player={player} open={isPlayerInfoShowing}/> : 
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
      }   
      </>
      }  
    </div>
  )
}

export default Player;