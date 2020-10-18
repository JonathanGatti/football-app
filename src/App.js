import React from 'react';
import TeamsList from './TeamsList';
import Team from './Team';
import {Switch, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { TeamContextProvider } from './contexts/TeamContexts';

function App() {
  return (
    <TeamContextProvider>
      <Paper>
        <Switch>
          <Route exact path='/' render={() => <TeamsList />} />
          <Route exact path='/team/juventus' render={() => <Team />} />
        </Switch>
      </Paper>
    </TeamContextProvider>
  );
}

export default App;
