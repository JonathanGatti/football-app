import React, { useContext } from 'react';
import { PlayerInfoContext } from './contexts/PlayerInfoContext';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


function PlayerInfo(props){
  const {player_name, age, position, birth_country, birth_date} = props.player;
  const {open} = props;
  const {hidePlayerInfo} = useContext(PlayerInfoContext);
  return (
    <Dialog  open={open} onClose={hidePlayerInfo} aria-labelledby="form-dialog-title">
      <DialogContent>
        <DialogTitle>{player_name}</DialogTitle>
        <DialogContentText>Age: {age}</DialogContentText>
        <DialogContentText>{position}</DialogContentText>
        <DialogContentText>{birth_date}</DialogContentText>
        <DialogContentText>{birth_country}</DialogContentText>
        <DialogActions>
        <Button onClick={hidePlayerInfo} color="primary">
              Go Back
        </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default PlayerInfo;