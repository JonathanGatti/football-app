import React, {createContext, useState} from 'react';

export const PlayerInfoContext = createContext();

export function PlayerInfoContextProvider(props){
  const [isPlayerInfoShowing, setPlayerInfo] = useState(false);
  const [dialog, setDialog] = useState(false)
  const showPlayerInfo = () => {
    setDialog(true)
    setPlayerInfo(!isPlayerInfoShowing)
  }
  const hidePlayerInfo = () => {
    setDialog(false)
    setPlayerInfo(!isPlayerInfoShowing)
  }
  return (
    <PlayerInfoContext.Provider value={{isPlayerInfoShowing, showPlayerInfo, hidePlayerInfo}}>
      {props.children}
    </PlayerInfoContext.Provider>
  )
}