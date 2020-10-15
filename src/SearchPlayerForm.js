import React, {useState} from 'react';
import axios from 'axios';
import config from './config';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import PlayersList from './PlayersList';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

function SearchPlayerForm(props) {
  const {open} = props
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [players, setPlayers] = useState('');
  const [setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  
  async function getData(name){
    try {
      let res = await axios.get(`${url}${name}`, {
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": config.api_key,
          "useQueryString": true
        }
    })
      setPlayers(res.data.api.players)

      }
    catch(e){
      console.log(e);
    }
  }
  const handleSubmit = () =>{
    getData(val)
  } 
  return (
      <div>
          <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Search for a Player</DialogTitle>
          <DialogContent>
            <form onSubmit={e => {
              e.preventDefault()
              handleSubmit()
              reset()
            }}>
              <TextField 
                margin='normal'
                label='Search for a player'
                value={val}
                onChange={handleChange}
              />
            </form>
            {players && <PlayersList players={players} idx={props.idx}/>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default SearchPlayerForm;