import { createContext, useState } from "react";

export const SessionContext = createContext({})

const MOCK_DATA = {
  loggedUser : {
    name : "Vinicius Quadrado",
    login : "viniciusq",
    dept: 'TI'
  },
  tasks : [
    {
      taskSubject : "Print problem",
      createdAt : "01 jul",
      createdBy : {
        username : "Reinaldo",
        userDept : "RH"
      },
      status : "In progress"

    },
    {
      taskSubject : "VPN connection",
      createdAt : "31 jun",
      createdBy : {
        username : "Marilza",
        userDept : "Finances"
      },
      status : "Waiting support"

    },
  ]
}

export function SessionContextProvider(props) {
  const [ loggedUser, setLoggedUser ] = useState(MOCK_DATA.loggedUser);
  const [ tasks, setTasks ] = useState(MOCK_DATA.tasks);

  return (
    <SessionContext.Provider
      value={
        { 
          loggedUser,
          tasks
        }
      }
    >
      {props.children}

    </SessionContext.Provider>
  )

}

