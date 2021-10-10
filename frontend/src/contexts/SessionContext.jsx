import { createContext, useState } from "react";

export const SessionContext = createContext({});

export function SessionContextProvider(props) {
  // TODO - GET LAST SESSION DATA

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return(
    <SessionContext.Provider
      value={{isSidebarOpen, setIsSidebarOpen}}
    >
      {props.children}
    </SessionContext.Provider>
  )
}