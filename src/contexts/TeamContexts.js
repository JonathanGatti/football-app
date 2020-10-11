import React, {createContext, useContext, useState} from 'react';
import players from './seedPlayers';
import { FormContext } from './FormContext';


export const TeamContext = createContext();

export function TeamContextProvider(props) {
  const [team, setTeam] = useState(players)

  const getPosition = (position) => {
    switch(position){
      case 'gk':
        return 10
      case 'def':
        return 3
      case 'cc':
          return 4 
      case 'Attacker':
          return 3
    }
  }
  const updateTeam = (newPlayer, idx) => {
    console.log(newPlayer, team)
    const updatedTeam = team.map((player, i) => {
      console.log(idx, i)
      return idx === i ? {...newPlayer} : player
    })
      setTeam(updatedTeam);
      console.log(updatedTeam)
  }
  
  return (
    <TeamContext.Provider value={{team, setTeam, getPosition, updateTeam}}>
      {props.children}
    </TeamContext.Provider>
  )
}