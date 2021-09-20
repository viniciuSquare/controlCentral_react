import { useEffect, useState } from 'react'
import { StyledDevicesPage } from "./style";

import { useSession } from '../../hooks/useSession'


export function Devices() {

  const { 
    devices,
    setPageCategories, getDevicesCategories } = useSession()

  useEffect(()=>{
    setPageCategories(getDevicesCategories());
  },[])

  return (
    <StyledDevicesPage className="visual-test">
      <h1 className="page-title">Dispositivos</h1>
      <table>
        <thead>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Setor</th>
          <th>IP</th>
          <th>Ferramentas</th>
        </thead>
        <tbody>
          {
            devices.length >0 
              ? (
                  devices.map( (dev) => {
                    return (
                      <tr>
                        <td>{dev.name}</td>
                        <td>{dev.category}</td>
                        <td>{dev.ip}</td>
                        <td>{dev.setor}</td>
                        <td><button><Tool></Tool></button></td>
                      </tr>
                    )
                  } 
                )
                
              ) : null
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </StyledDevicesPage>
  )
}