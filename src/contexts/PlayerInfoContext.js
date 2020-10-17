import React, {createContext, useState} from 'react';

export const PlayerInfoContext = createContext();

export function PlayerInfoContextProvider(props){
  const [playerInfo, setPlayerInfo] = useState(false);
  const [dialog, setDialog] = useState(false)
  const showPlayerInfo = () => {
    setDialog(true)
    setPlayerInfo(!playerInfo)
  }
  const hidePlayerInfo = () => {
    setDialog(false)
    setPlayerInfo(!playerInfo)
  }
  return (
    <PlayerInfoContext.Provider value={{playerInfo, showPlayerInfo, hidePlayerInfo}}>
      {props.children}
    </PlayerInfoContext.Provider>
  )
}