import { createContext, useState } from "react";

export const SessionContext = createContext({});

export function SessionContextProvider(props) {
  // TODO - GET LAST SESSION DATA

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navCategories, setNavCategories] = useState({});

  return(
    <SessionContext.Provider
      value={{isSidebarOpen, setIsSidebarOpen, navCategories, setNavCategories}}
    >
      {props.children}
    </SessionContext.Provider>
  )
}