import React, { useContext } from 'react';
import background from './imgs/background.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import { TeamContext } from './contexts/TeamContexts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Team(){
  const classes = useStyles();
  const {team} = useContext(TeamContext)
  const getType = (type) => {
    switch(type){
      case 'gk':
        return 12
      case 'def':
        return 3
      case 'cc':
          return 4 
      case 'att':
          return 4
    }
  }
  return(
      <Paper className={classes.root}>
        <Grid container spacing={4}>
        {team.map(player => (
          <Grid item xs={getType(player.type)}>
            <Paper className={classes.paper}>
              <Player player={player}/>
            </Paper>
          </Grid>
          ))
        }
        </Grid>
      </Paper>
  )
}

export default Team;