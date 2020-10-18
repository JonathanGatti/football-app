import React from 'react';
import Team from './Team';
import CreateTeam from './CreateTeam';
import TeamsList from './TeamsList';
import {Switch, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { TeamContextProvider } from './contexts/TeamContexts';
import { FormContextProvider } from './contexts/FormContext';
import './styles/App.css'

function App() {
  return (
    <TeamContextProvider>
      <FormContextProvider>
        <Paper className='body'>
          <Switch>
            <Route exact path='/' render={() => <TeamsList />} />
            <Route exact path='/team/juventus' render={() => <Team />} />
            <Route exact path='/team/create' render={() => <CreateTeam />} />
          </Switch>
        </Paper>
      </FormContextProvider>
    </TeamContextProvider>
  );
}

export default App;
