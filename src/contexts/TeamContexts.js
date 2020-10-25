import React, {createContext, useState} from 'react';

export const TeamContext = createContext();

const defaultPlayers = [{},{},{},{},{},{},{},{},{},{},{}]

export function TeamContextProvider(props) {
  const [teamPlayers, setTeamPlayers] = useState(defaultPlayers)

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
    const updatedTeam = teamPlayers.map((player, i) => {
      return idx === i ? {...newPlayer} : player
    })
      setTeamPlayers(updatedTeam);
  }
  
  return (
    <TeamContext.Provider value={{teamPlayers, setTeamPlayers, getPosition, updateTeam}}>
      {props.children}
    </TeamContext.Provider>
  )
}