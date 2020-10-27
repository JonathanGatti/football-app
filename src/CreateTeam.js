import React, { useContext, useState } from 'react';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import { TeamContext } from './contexts/TeamContexts';
import {postData} from './utils/requestsLocalApi';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/SnackBar';
import useSnackBar from './hooks/useSnackBar';

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Team from './Team'

function CreateTeam(){
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [teamName, setTeamName] = useState('');
  const {teamPlayers} = useContext(TeamContext);
  const [isOpen, openSnackBar, closeSnackBar] = useSnackBar(false)

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
        {!teamName &&
        <form className='form' 
          onSubmit={e => {
            e.preventDefault()
            handleSubmit()
            openSnackBar()
            reset()
        }}>
          <TextField 
              margin='normal'
              label='Name Your team'
              value={val}
              onChange={handleChange}
          />
        </form>
        }
        <Team teamPlayers ={teamPlayers} teamName={teamName}/> 
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={closeSnackBar}
        message="Name saved!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackBar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        <Button onClick={()=> submitTeam()}>SUBMIT</Button>
      </Paper>
  )
}

export default CreateTeam;