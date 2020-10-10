import React, {useState} from 'react';
import axios from 'axios';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import PlayersList from './PlayersList'
import TextField from '@material-ui/core/TextField';
import config from './config'

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

function SearchPlayerForm() {
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [players, setPlayers] = useState('');
  
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
        {players && <PlayersList players={players}/>}
      </div>
  )
}

export default SearchPlayerForm;