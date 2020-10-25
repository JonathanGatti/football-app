import React, { useContext, useState } from 'react';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import { TeamContext } from './contexts/TeamContexts';
import {postData} from './utils/postDataLocalApi';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Team from './Team'

function CreateTeam(){
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [teamName, setTeamName] = useState('');
  const {teamPlayers} = useContext(TeamContext);

  function handleSubmit(){
    setTeamName(val)
  }

  function submitTeam(){
    const data = {
      teamName : teamName,
      teamPlayers: teamPlayers
    }
    postData(data)
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