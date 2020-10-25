import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import useStyles from './styles/TeamListStyles';

function TeamsList(props){
  const classes = useStyles();
  const {teams} = props;
  
  return (
    <Grid container className={classes.root} >
      <Typography className={classes.title} variant='h3'>The Football App</Typography>
      <Link to='/create'>Create Team</Link>
      <Grid item xs={12}>
        <Grid container className={classes.container} >
          {teams.map((team) => (
            <Grid key={team._id} item>
              <Link to={`team/${team.teamName}`}>
                <Paper className={classes.paper}>
                  <Typography>{team.teamName}</Typography>
                </Paper>
              </Link>
            </Grid>
            ))}
          </Grid>
        </Grid>
    </Grid>
  )
}

export default TeamsList