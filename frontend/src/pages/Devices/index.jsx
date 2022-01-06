import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { BsLink45Deg, BsPencilSquare, BsThreeDots, BsTrash2Fill } from 'react-icons/bs';

import api from '../../api/api';

import { NewDeviceModal } from './partials/DeviceFormModal';
import { useSession } from '../../hooks/useSession';

import { DetailsContainer, StyledDataPage } from '../Base/styled';

import Modal from '../../components/Modal';

const apiPath = "/dispositivos"

export function Devices() {
  // DATA WILL COME FROM BACKEND
  const [devices , setDevices] = useState({});
  // const [devicesCategories , setDevicesCategories] = useState({});
  const {navCategories, setNavCategories} = useSession();
  
  // SET IF DATA CAME
  const [ isContentLoaded, setIsContentLoaded ] = useState();
  
  const [ selectedDevice, setSelectedDevice ] = useState({});
  const [ deviceToEdit, setDeviceToEdit ] = useState({});

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleModalVisibility = () => setIsModalVisible(!isModalVisible)
  
  const [ isEditionModalVisible, setEditionModalVisibility ] = useState();
  const toggleEditionModalVisibility = () => setEditionModalVisibility(!isEditionModalVisible);

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);
  
  let pathData = useLocation()


  // FEED DATA FOR TABLES FROM BACKEND
  useEffect(async ()=>{
    
    console.log(pathData, "PATH DATA")
  
    let {data: devicesList} = await api.get(apiPath);
    setDevices(devicesList);

    let {data: navCategories} = await api.get( apiPath + "/categorias");
    setNavCategories(navCategories);

    return () => setNavCategories({})
  }, [])

  useEffect(()=>{
    console.log(selectedDevice, "MUDOU NOVAMENTE")
    if(!isContentLoaded)
      setIsContentLoaded(true);
    if(selectedDevice.intent == "edit") {
      setDeviceToEdit(selectedDevice);
      toggleModalVisibility()

    }
        
  }, [selectedDevice, devices])

  return (
    <StyledDataPage>
      <div className="left-side">
        {/* <div className="container-head"></div> */}
        <div className="l-content">
        </div>
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title title">Dispositivos</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleModalVisibility} > Add device</button>
            </div>
          </div>
          { isModalVisible //NEW DEVICE MODAL
              && <NewDeviceModal deviceToEdit={deviceToEdit} devicesCategories={navCategories} closer={toggleModalVisibility}/> 
          }
          
        </div>
        <div className="pane-content">
          <DeviceList devices={devices} handleItemSelection={setSelectedDevice}/>
        </div>
        <DeviceDetails device={selectedDevice} />
      </div>
      <div className="right-side">

      </div>
    </StyledDataPage>
  )
}

const DeviceList= ({devices, handleItemSelection})=> {

  const [selectedItem, setSelectedItem] = useState({});

  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const toggleEditFormVisibility = () => setIsEditFormVisible(!isEditFormVisible);

  const handleSelectionIntent = (selectedItem, intent) => {
    selectedItem.intent = intent;
    handleItemSelection(selectedItem);
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
                  <tr key={device.id} >
                    <td  >{device.alias}</td>
                    <td  >{device.category?.title||"Indefinido" }</td>
                    <td  >{device.ip}</td>
                    <td  >{device.setor}</td>
                    <td  >
                      <div className="data-tools" >
                        <button><BsLink45Deg size="24" /></button>
                        <button onClick={()=> handleSelectionIntent(device,"edit") }><BsPencilSquare size="24" /></button>
                        <button onClick={()=> handleItemSelection(device)} ><BsThreeDots size="24" /></button>
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

  const deleteDevice = async () => {
    await api.put(`${apiPath}/${device.id}`);
  }

  return(
    <>
      <h1 className="field-title">Detalhes da selação</h1>
      <DetailsContainer >
        { device.id
          ? (
            <>
              <div id="data-details">
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
        
      </DetailsContainer>
    </>
  )

}