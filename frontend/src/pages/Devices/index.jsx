import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import api from '../../api/api';

import { NewDeviceModal } from './components/DeviceFormModal';
import { useSession } from '../../hooks/useSession';

import { StyledDataPage } from '../Base/styled';

import Modal from '../../components/Modal';
import { DeviceList } from './components/DeviceList';
import { DeviceDetails } from './components/DeviceDetails';

const apiPath = "/dispositivos"

export function Devices() {
  // DATA WILL COME FROM BACKEND
  const [devices , setDevices] = useState({});
  // const [devicesCategories , setDevicesCategories] = useState({});
  const {domainCategories, setDomainCategories} = useSession();
  
  // SET IF DATA CAME
  const [ isContentLoaded, setIsContentLoaded ] = useState();
  
  const [ selectedDevice, setSelectedDevice ] = useState({});
  const [ deviceToEdit, setDeviceToEdit ] = useState({});

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleModalVisibility = () => setIsModalVisible(!isModalVisible)
  
  function showAddDeviceModal() {
    deviceToEdit &&
      setDeviceToEdit({})
    
    toggleModalVisibility()
  }
  
  const [ isEditionModalVisible, setEditionModalVisibility ] = useState();
  const toggleEditionModalVisibility = () => setEditionModalVisibility(!isEditionModalVisible);

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);
  
  let pathData = useLocation()


  // FEED DATA FOR TABLES FROM BACKEND
  useEffect(async()=>{
      
    console.log(pathData, "PATH DATA")
  
    let {data: devicesList} = await api.get(apiPath).catch(err => console.log('Devices GET err', err));
    setDevices(devicesList);

    let {data: domainCategories} = await api.get( apiPath + "-categorias").catch(err => console.log('Categories GET err', err));
    setDomainCategories(domainCategories);
    
    return () => setDomainCategories({})
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
              <button onClick={showAddDeviceModal} > Add device</button>
            </div>
          </div>
          { isModalVisible //NEW DEVICE MODAL
              && <NewDeviceModal deviceToEdit={deviceToEdit} devicesCategories={domainCategories} closer={toggleModalVisibility}/> 
          }
          
        </div>
        <div className="pane-content">
          <DeviceList devices={devices} handleItemSelection={setSelectedDevice}/>
        </div>
        {/* TODO - HANDLE DETAILS VIEW  */}
        <DeviceDetails device={selectedDevice} />
      </div>
      {/* <div className="right-side">

      </div> */}
    </StyledDataPage>
  )
}