import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { StyledDevicesPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPencilSquare, BsPlus, BsThreeDots, BsTrash, BsTrash2Fill } from 'react-icons/bs';

import api from '../../api/api';

import { NewDeviceModal } from './DeviceFormModal';
import Modal from '../../components/Modal';
import { useSession } from '../../hooks/useSession';
import Base from '../Base';

const apiPath = "/dispositivos"

export function MockDevices() {
  return(
    <Base itensTable={ItensTable} pageTitle="Dispoivos">
    </Base>
  )
}

const ItensTable = () => {
  return (
    <>
      <thead>
        <th>Alias</th>
        <th>Usuário</th>
        <th>Setor</th>
        <th>IP</th>
        <th>Ferramentas</th>
      </thead>
      <tbody>
        {/* {
          devices.length > 0 &&
            (
              devices.map( device => {
                return (
                  <tr key={device.id} onClick={handleDataSelection} >
                    <td  >{device.alias}</td>
                    <td  >{device.category?.title||"Indefinido" }</td>
                    <td  >{device.ip}</td>
                    <td  >{device.setor}</td>
                    <td  >
                      <div className="device-tools" >
                        <button><BsLink45Deg size="24" /></button>
                        <button ><BsPencilSquare size="24" /></button>
                        <button onClick={()=>handleItemSelection(device)} ><BsThreeDots size="24" /></button>
                      </div>
                    </td>
                  </tr>
                )
              } 
            )
          )
        } */}
      </tbody>

    </>
  )
}

const DeviceDetails = ({device}) => {
  console.log(device)

  const deleteDevice = async () => {
    await api.put(`${apiPath}/${device.id}`);
  }

  return(
    <>
      <h1 className="field-title">Detalhes da selação</h1>
      <div className="device-details-container" >
        { device.id
          ? (
            <>
              <div id="device-details">
                <div className="head">
                  <div className="title">
                    <p>Nome</p>
                    <h3>{device.alias}</h3>
                  </div>
                  
                  <div className="tools">
                    <button>
                      <BsPencilSquare size="32" />
                    </button>
                    <button onClick={deleteDevice} >
                      <BsTrash2Fill size="32" />
                    </button>
                  </div>

                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="align-left" >
                        <h4>Usuário</h4>
                      </td>
                      <td className="align-left" >
                        <p>Vinícius Quadrado</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Endereço IP</h4>
                      </td>
                      <td className="align-left" >
                        <p>{device.ipCable||device.ipWireless||"Não definido"}</p>
                        
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Tipo dispositivo</h4>
                      </td>
                      <td className="align-left" >
                        <p>{device.category?.title||"Não definido"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-left" >
                        <h4>Local/Setor</h4>
                      </td>
                      <td className="align-left" >
                        <p>Sala de TI</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <tbody>
                  <tr>
                      <td className="align-left" >
                        Estado
                      </td>
                      <td className="align-left" >
                        <p>{device.state||"Não definido"}</p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="align-left" >
                        <h2>Categoria Operacional</h2>
                      </td>
                      <td className="align-left" >
                        <p>{device.operationalCategory?.title||"Não definido"}</p>
                      </td>
                    </tr>
                  </tbody> */}
                
              </div>
            </>
          )
          : (
            <h1 className="field-title warning">Selecione item para ver detalhes</h1>
          )
      }
        
      </div>
    </>
  )

}