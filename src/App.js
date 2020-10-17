import React from 'react';
import Team from './Team';
import Paper from '@material-ui/core/Paper';
import { TeamContextProvider } from './contexts/TeamContexts';

function App() {
  return (
    <TeamContextProvider>
      <Paper>
        <Team />
      </Paper>
    </TeamContextProvider>
  );
}

export default App;
