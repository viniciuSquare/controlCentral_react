import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { StyledDevicesPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPencilSquare, BsPlus, BsThreeDots, BsTrash, BsTrash2Fill } from 'react-icons/bs';

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

    return () => setNavCategories({})
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
        {/* <div className="container-head"></div> */}
        <div className="l-content">
          {/* <div className="left-side-menu">
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
          </div> */}
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
          { isModalVisible //NEW DEVICE MODAL
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
    <table id="devices-listage"  className="with-td-division">
      <thead>
        <th>Alias</th>
        <th>Usuário</th>
        <th>Setor</th>
        <th>IP</th>
        <th>Ferramentas</th>
      </thead>
      <tbody>
        {
          devices.length > 0 &&
            (
              devices.map( device => {
                return (
                  <tr key={device.id} onClick={handleDataSelection} >
                    <td  >{device.alias}</td>
                    <td  >{device.category.title}</td>
                    <td  >{device.ip}</td>
                    <td  >{device.setor}</td>
                    <td  >
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
          )
        }
      </tbody>
    </table>
  )
}

const DeviceDetails = ({device}) => {
  console.log(device)
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
                    <button>
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