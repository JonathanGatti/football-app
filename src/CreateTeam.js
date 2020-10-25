import React, { useContext, useState } from 'react';
import axios from 'axios';
import useSearchPlayerForm from './hooks/useSearchPlayerForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TeamContext } from './contexts/TeamContexts';
import { FormContextProvider } from './contexts/FormContext';
import { PlayerInfoContextProvider } from './contexts/PlayerInfoContext';
import  useStyles from './styles/TeamStyles'

function CreateTeam(){
  const classes = useStyles();
  const [val, handleChange, reset] = useSearchPlayerForm('');
  const [teamName, setTeamName] = useState('');
  const {teamPlayers, getPosition} = useContext(TeamContext);

  function handleSubmit(){
    setTeamName({teamName: val})
  }

  function submitTeam(){
    axios.post('http://127.0.0.1:3001/api/teams', {
      teamName : teamName.teamName,
      teamPlayers: teamPlayers
    })
    .then(res => {
      console.log(res)
    })
  }

  return(
      <Paper className={classes.root}>
          <form className={classes.input} onSubmit={e => {
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
        <Grid container className={classes.container}spacing={4}>
        {teamPlayers.map((player, i) => (
          <FormContextProvider>
            <PlayerInfoContextProvider>
              <Grid className={classes.playerContainer} item xs={getPosition(player.position)}>
                <Paper className={classes.paper}>
                  <Player idx={i} player={player} />
                </Paper>
              </Grid>
            </PlayerInfoContextProvider>
          </FormContextProvider>
          ))
        }
        </Grid>
        <Button onClick={()=> submitTeam()}>SUBMIT</Button>
      </Paper>
  )
}

export default CreateTeam;