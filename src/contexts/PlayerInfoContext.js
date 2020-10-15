import React, {createContext, useState} from 'react';

export const PlayerInfoContext = createContext();

export function PlayerInfoContextProvider(props){
  const [showPlayer, setShowPlayer] = useState(false);
  const togglePlayerInfo = () => {
    setShowPlayer(!showPlayer)
  }
  return (
    <PlayerInfoContext.Provider value={{showPlayer, togglePlayerInfo}}>
      {props.children}
    </PlayerInfoContext.Provider>
  )
}