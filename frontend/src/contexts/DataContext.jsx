import { createContext, useState } from "react";

export const DataContext = createContext({})

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
  ],

  devices: [
    {
      name : "PDV mobile 60",
      category : "smartphones",
      ip : "172.168.3.60",
      setor : "Restaurantes"
    },
    {
      name : "ONT Bar barco",
      category : "ONT",
      ip : "172.168.2.135",
      setor : "Restaurantes"
    },
    {
      name : "PC Reservas 115",
      category : "Computador",
      ip : "172.168.1.115",
      setor : "Reservas"
    },
    {
      name : "AP TI",
      category : "Unifi",
      ip : "172.168.2.220",
      setor : "TI"
    },
    {
      name : "IMP Comanda Pça lua",
      category : "IMP Térmica",
      ip : "172.168.1.49",
      setor : "Pça da Lua"
    },
  ]
}
const getDevicesCategories = () => {
  let devicesCategories = MOCK_DATA.devices.map( dev => {
    return dev.category
  })

  return devicesCategories;
}

export function DataContextProvider(props) {
  
  // TODO - MOVE TO NEWER CONTEXT
  const [ loggedUser, setLoggedUser ] = useState(MOCK_DATA.loggedUser);
  
  const [ tasks, setTasks ] = useState(MOCK_DATA.tasks);
  const [ devices, setDevices ] = useState(MOCK_DATA.devices);

  const [ pageCategories, setPageCategories ] = useState({})

  return (
    <DataContext.Provider
      value={
        { 
          loggedUser,
          tasks,
          devices,
          pageCategories, setPageCategories,
          getDevicesCategories
          
        }
      }
    >
      {props.children}

    </DataContext.Provider>
  )

}

