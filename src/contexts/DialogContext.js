import React, {createContext, useState} from 'react';

export const DialogContext = createContext();

export function DialogContextProvider(props){
  const [dialog, setDialog] = useState(false)

  const toggleDialog = () => {
    setDialog(!dialog)
  }
  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClickClose = () => {
    setDialog(false)
  }

  return (
    <DialogContext.Provider value={{dialog, toggleDialog, handleClickOpen, handleClickClose}}>
      {props.children}
    </DialogContext.Provider>
  )
}