import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CreateTeam from './CreateTeam';
import TeamsList from './TeamsList';
import Navbar from './Navbar';
import Team from './Team';

import { TeamContextProvider } from './contexts/TeamContexts';
import { FormContextProvider } from './contexts/FormContext';
import getTeams from './utils/fetchDataLocalApi';

import './styles/App.css';

function App() {
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    async function getTeamsInEffect(){
      const res = await getTeams();
      setTeams(res);
    }
    getTeamsInEffect()
  }, [teams.length])

  const getTeam = (props) => {
    let name = props.match.params.name;
    let currTeam = teams.find(team => (
      team.teamName.toLowerCase() === name.toLowerCase()
    ))
    return <Team {...props} teamPlayers={currTeam.teamPlayers}/>
  }
  return (
    <TeamContextProvider>
      <FormContextProvider>
        <Navbar/>
        <Paper className='body'>
          <Switch>
            <Route exact path='/' render={() => <TeamsList teams={teams}/>} />
            <Route exact path='/team/:name' render={getTeam} />
            <Route exact path='/create' render={() => <CreateTeam />} />
          </Switch>
        </Paper>
      </FormContextProvider>
    </TeamContextProvider>
  );
}

export default App;
