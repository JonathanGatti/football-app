import React, {createContext, useState} from 'react';

export const TeamContext = createContext();

const players = [
  {type: 'gk', name: 'buffon', age: 41, team: 'juventus'},
  {type: 'def', name: 'danilo', age: 28, team: 'juventus'},
  {type: 'def', name: 'bonucci', age: 33, team: 'juventus'},
  {type: 'def', name: 'chiellini', age: 35, team: 'juventus'},
  {type: 'def', name: 'alex sandro', age: 30, team: 'juventus'},
  {type: 'cc', name: 'mcKenny', age: 22, team: 'juventus'},
  {type: 'cc', name: 'bentancur', age: 23, team: 'juventus'},
  {type: 'cc', name: 'rabiot', age: 26, team: 'juventus'},
  {type: 'att', name: 'kuluvesky', age: 20, team: 'juventus'},
  {type: 'att', name: 'dybala', age: 28, team: 'juventus'},
  {type: 'att', name: 'ronaldo', age: 35, team: 'juventus'},
]

export function TeamContextProvider(props) {
  const [team, setTeam] = useState(players)
  const getType = (type) => {
    switch(type){
      case 'gk':
        return 10
      case 'def':
        return 3
      case 'cc':
          return 4 
      case 'att':
          return 3
    }
  }
  return (
    <TeamContext.Provider value={{team, setTeam, getType}}>
      {props.children}
    </TeamContext.Provider>
  )
}