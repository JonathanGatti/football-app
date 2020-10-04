import React, {useState} from 'react';
import axios from 'axios';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import PlayersList from './PlayersList'
import TextField from '@material-ui/core/TextField';
const api_key = '&APIkey=909f31a51bca52bfeb7d77007168e1bf1f2c104cc0976263f1300ddc2f7f6826';
const url = 'http://api-football-v1.p.rapidapi.com/v2/players/search/';
const key ='89f56fc814mshaffde0d4f2ea23cp144e32jsnf8dcdcfa56ff'

function SearchPlayerForm() {
  const [val, handleChange, reset] = useSearchPlayerForm('')
  const [players, setPlayers] = useState('')
  async function getData(name){
    try {
      let res = await axios.get(`${url}${name}`, {
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": key,
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