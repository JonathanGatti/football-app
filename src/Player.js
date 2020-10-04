import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
const api_key = '&APIkey=909f31a51bca52bfeb7d77007168e1bf1f2c104cc0976263f1300ddc2f7f6826';
const url = 'https://apiv2.apifootball.com/?action=get_players&player_name=';

function Player() {
  const [player, setPlayer] = useState('')
  async function getData(name){
    try {
      let res = await axios.get(`${url}${name}${api_key}`)
      console.log(res.data)
      setPlayer(res.data[1])
    }
    catch(e){
      console.log(e);
    }
  }

  const handleSubmit = (e) =>{
    getData(e.target.value)
  } 
  return (
      <div>
        <h1>{player.player_name}</h1>
        <form onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
          <TextField 
            margin='normal'
            label='Search for a player'
            value={player.player_name}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </form>
      </div>
  )
}

export default Player;