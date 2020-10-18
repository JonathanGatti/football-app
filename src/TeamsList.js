import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white'
  },
  container: {
    width: '60%',
    height: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    height: 200,
    width: 200,
    margin: '2rem'
  },
}));

function TeamsList(){
  const classes = useStyles();
  return (
    <Grid container className={classes.root} >
      <Typography className={classes.title} variant='h3'>The Football App</Typography>
      <Link to='/team/create'>Create Team</Link>
      <Grid item xs={12}>
        <Grid container className={classes.container} >
          {[0, 1, 2,3,4,5].map((value) => (
            <Grid key={value} item>
              <Link to='/team/juventus'>
                <Paper className={classes.paper}>
                  <Typography>Juventus</Typography>
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