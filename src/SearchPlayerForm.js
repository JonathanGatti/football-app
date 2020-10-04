import React, {useState} from 'react';
import axios from 'axios';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import Player from './Player'
import TextField from '@material-ui/core/TextField';
const api_key = '&APIkey=909f31a51bca52bfeb7d77007168e1bf1f2c104cc0976263f1300ddc2f7f6826';
const url = 'https://apiv2.apifootball.com/?action=get_players&player_name=';

function SearchPlayerForm() {
  const [val, handleChange, reset] = useSearchPlayerForm('')
  const [player, setPlayer] = useState('')
  async function getData(name){
    try {
      let res = await axios.get(`${url}${name}${api_key}`)
      setPlayer(res.data[1])
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
        <Player player={player}/>
      </div>
  )
}

export default SearchPlayerForm;