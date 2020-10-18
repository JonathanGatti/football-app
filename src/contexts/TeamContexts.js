import React, {createContext, useState} from 'react';
import defaultPlayers from '../seedPlayers';

export const TeamContext = createContext();

export function TeamContextProvider(props) {
  const [team, setTeam] = useState(defaultPlayers)

  const getPosition = (position) => {
    switch(position){
      case 'Goalkeeper':
        return 10
      case 'Defender':
        return 3
      case 'Midfielder':
          return 4 
      case 'Attacker':
          return 3
    }
  }
  const updateTeam = (newPlayer, idx) => {
    const updatedTeam = team.map((player, i) => {
      return idx === i ? {...newPlayer} : player
    })
      setTeam(updatedTeam);
  }
  
  return (
    <TeamContext.Provider value={{team, setTeam, getPosition, updateTeam}}>
      {props.children}
    </TeamContext.Provider>
  )
}