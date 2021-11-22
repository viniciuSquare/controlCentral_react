import { createContext, useState } from "react";

export const DataContext = createContext({})

export function DataContextProvider(props) {
 
  // TODO - MOVE TO NEWER CONTEXT
  // const [ loggedUser, setLoggedUser ] = useState(MOCK_DATA.loggedUser);
  const loggedUser = "  ";
  
  const [ tasks, setTasks ] = useState({});
  const [ devices, setDevices ] = useState({});

  const [ pageCategories, setPageCategories ] = useState({})

  return (
    <DataContext.Provider
      value={
        { 
          loggedUser,
          tasks,
          devices,
          pageCategories, setPageCategories          
        }
      }
    >
      {props.children}

    </DataContext.Provider>
  )

}

