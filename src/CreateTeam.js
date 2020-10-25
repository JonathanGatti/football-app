import React, { useContext, useState } from 'react';
import axios from 'axios';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import Paper from '@material-ui/core/Paper';
import Team from './Team'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TeamContext } from './contexts/TeamContexts';

function CreateTeam(){
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [teamName, setTeamName] = useState('');
  const {teamPlayers} = useContext(TeamContext);

  function handleSubmit(){
    setTeamName(val)
  }

  function submitTeam(){
    const data ={
      teamName : teamName,
      teamPlayers: teamPlayers
    }
    axios.post('http://127.0.0.1:3001/api/teams',
    data,
     {
      headers: {
        'Content-Type': 'application/json',
        }
    })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  }

  return(
      <Paper>
          <form onSubmit={e => {
              e.preventDefault()
              handleSubmit()
              reset()
            }}>
          <TextField 
                margin='normal'
                label='Name Your team'
                value={val}
                onChange={handleChange}
          />
        </form>
        <Team teamPlayers ={teamPlayers}/> 
        <Button onClick={()=> submitTeam()}>SUBMIT</Button>
      </Paper>
  )
}

export default CreateTeam;