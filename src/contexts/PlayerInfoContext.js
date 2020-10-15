import React, {createContext, useState} from 'react';

export const PlayerInfoContext = createContext();

export function PlayerInfoContextProvider(props){
  const [playerInfo, setPlayerInfo] = useState(false);
  const showPlayerInfo = () => {
    setPlayerInfo({playerInfo: true})
  }
  return (
    <PlayerInfoContext.Provider value={{playerInfo, showPlayerInfo}}>
      {props.children}
    </PlayerInfoContext.Provider>
  )
}