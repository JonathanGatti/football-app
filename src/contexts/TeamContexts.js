import React, {createContext, useState} from 'react';

export const TeamContext = createContext();

const players = [
  {type: 'gk', name: 'buffon', age: 41, team: 'juventus'},
  {type: 'td', name: 'danilo', age: 28, team: 'juventus'},
  {type: 'dcd', name: 'bonucci', age: 33, team: 'juventus'},
  {type: 'dcs', name: 'chiellini', age: 35, team: 'juventus'},
  {type: 'dcd', name: 'alex sandro', age: 30, team: 'juventus'},
  {type: 'cd', name: 'mcKenny', age: 22, team: 'juventus'},
  {type: 'cc', name: 'bentancur', age: 23, team: 'juventus'},
  {type: 'cs', name: 'rabiot', age: 26, team: 'juventus'},
  {type: 'ad', name: 'kuluvesky', age: 20, team: 'juventus'},
  {type: 'att', name: 'dybala', age: 28, team: 'juventus'},
  {type: 'al', name: 'ronaldo', age: 35, team: 'juventus'},
]

export function TeamContextProvider(props) {
  const [team, setTeam] = useState(players)

  return (
    <TeamContext.Provider value={{team, setTeam}}>
      {props.children}
    </TeamContext.Provider>
  )
}