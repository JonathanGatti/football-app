import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FormContext } from './contexts/FormContext';
import SearchPlayerForm from './SearchPlayerForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { 
    color: 'white'
  },
  container: {
    height: '90%',
    width: '70%',
    marginTop: '3rem',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '200px',
    color: theme.palette.text.secondary,
  },
}));

function CreateTeam(props){
  const classes = useStyles();
  const {isFormShowing, handleClickOpen} = useContext(FormContext);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h3'>Create Your Team</Typography>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button onClick={handleClickOpen}>Search for a Player</Button>
          </Paper> 
          <SearchPlayerForm open={isFormShowing}/>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateTeam;