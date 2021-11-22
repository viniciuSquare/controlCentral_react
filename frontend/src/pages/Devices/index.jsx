import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import { StyledDevicesPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPencilSquare, BsPersonLinesFill, BsPlus, BsThreeDots } from 'react-icons/bs';

import { useData } from '../../hooks/useData'
import api from '../../api/api';

import { NewDeviceModal } from './DeviceFormModal';
import Modal from '../../components/Modal';
import { useSession } from '../../hooks/useSession';

export function Devices() {
  // DATA WILL COME FROM BACKEND
  const [devices , setDevices] = useState({});
  // const [devicesCategories , setDevicesCategories] = useState({});
  const {navCategories, setNavCategories} = useSession();
  
  // SET IF DATA CAME
  const [ isContentLoaded, setIsContentLoaded ] = useState();
  
  const [ selectedDevice, setSelectedDevice ] = useState({});

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);
  
  let pathData = useLocation()


  // FEED DATA FOR TABLES FROM BACKEND
  useEffect(async ()=>{
    
    console.log(pathData, "PATH DATA")
  
    let {data: devicesList} = await api.get("/dispositivos");
    setDevices(devicesList);

    let {data: navCategories} = await api.get("/dispositivos/categorias");
    setNavCategories(navCategories);

    // return () => setDevicesCategories({})
  }, [])

  useEffect(()=>{
    if(!isContentLoaded)
      setIsContentLoaded(true);
        
  }, [selectedDevice, devices])

  // LEFT SIDE FORM
  async function submitNewDeviceCategory(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data.isNetDev = data.isNetDev == 'on' ? true : false

    let {data:creationResult} = await api.post("dispositivos/categoria/", data);
    
    console.log(creationResult);
  }

  return (
    <StyledDevicesPage>
      <div className="left-side">
        <div className="container-head">
          <h3 className="title">
            Categorias
          </h3>
        </div>
        <div className="l-content">
          <ul className="pageCategoriesList">
            {
              navCategories.length > 0 
                ? navCategories.map( category => {
                  return (
                    <li key={category.id} className="pageCategoryLink">
                      <NavLink to={`/dispositivos/${category.title}`} >{category.title}</NavLink>
                      <BsNodePlus size="24"/> 
                    </li>
                  )
                }) 
                : <li>Nada a ser exibido</li>
            }
          </ul>
          <div className="left-side-menu">
            <button onClick={toggleNewCategoryModalVisibility} id="toggle-new-device-modal" >
              <strong>Nova categoria</strong>
              <BsPlus size="24"/>
            </button>
            {
              isNewCategoryModalVisible &&
                <form onSubmit={submitNewDeviceCategory} className="new-category-modal  " >
                  <div>
                    <input  
                      id="new-category-title" 
                      type="text" 
                      placeholder="Título da categoria..." 
                      name="title"
                    />
                    <div className="input-group align-horizontal spaced">
                      <label htmlFor="isNetDev">Dispositivo de rede?</label>
                      <input  
                        type="checkbox" 
                        name="isNetDev"
                      />
                    </div>
                  </div>
                  <button type="submit">
                    <BsNodePlus size="24"/>
                  </button>
                </form>
            }
          </div>
        </div>
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title title">Dispositivos</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add device</button>
            </div>
          </div>
          {isModalVisible //NEW DEVICE MODAL
              && <NewDeviceModal devicesCategories={navCategories}closer={toggleVisibility}/> 
          }
          
        </div>
        <div className="pane-content">
          <DeviceList devices={devices} handleItemSelection={setSelectedDevice}/>
        </div>
        <DeviceDetails device={selectedDevice} />
      </div>
      <div className="right-side">

      </div>
    </StyledDevicesPage>
  )
}

const DeviceList= ({devices, handleItemSelection})=> {

  function handleDataSelection(event){
    const {target} = event;

  }

  return(
    <table>
      <thead>
        <th>Alias</th>
        <th>Usuário</th>
        <th>Setor</th>
        <th>IP</th>
        <th>Ferramentas</th>
      </thead>
      <tbody>
        {
          devices.length > 0 
            ? (
                devices.map( device => {
                  return (
                    <tr onClick={handleDataSelection} >
                      <td>{device.alias}</td>
                      <td>{device.category.title}</td>
                      <td>{device.ip}</td>
                      <td>{device.setor}</td>
                      <td>
                        <div className="device-tools" >
                          <button><BsLink45Deg size="24" /></button>
                          <button onClick={ ()=> {
                              <Modal>

                              </Modal>
                            } 

                          } ><BsPencilSquare size="24" /></button>
                          <button onClick={()=>handleItemSelection(device)} ><BsThreeDots size="24" /></button>
                        </div>
                      </td>
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
  )
}

const DeviceDetails = ({device}) => {
  console.log(device)
  return(
    <div id="device-detail">
      { device.id
        ? (
          <>
            <h1>Detalhes da selação</h1>
            <h3>{device.alias}</h3>
            <table>
              <tbody>
              <tr>
                <h2>Usuário</h2>
                <p>Vinícius Quadrado</p>
              </tr>
              <tr>
                <h2>IP</h2>
                <p>{device.ipCable||device.ipWireless||"Não definido"}</p>
              </tr>
              <tr>
                <h2>Categoria</h2>
                <p>{device.category?.title||"Não definido"}</p>
              </tr>
              <tr>
                <h2>Categoria</h2>
                <p>{device.category?.title||"Não definido"}</p>
              </tr>
      
              </tbody>
            </table>
          </>
        )
        : (
          <h1 className="select-to-see warning">Selecione item para ver detalhes</h1>
        )
    }
      
    </div>
  )

}