import React, {createContext, useState} from 'react';

export const FormContext = createContext();

export function FormContextProvider(props){
  const [isFormShowing, setIsFormShowing] = useState(false);
  const toggleForm = () => {
    setIsFormShowing(!isFormShowing)
  }
  return (
    <FormContext.Provider value={{isFormShowing, toggleForm}}>
      {props.children}
    </FormContext.Provider>
  )
}