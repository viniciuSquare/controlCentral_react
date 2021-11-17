import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

import { StyledDevicesPage } from "./styled";
import { BsLink45Deg, BsNodePlus, BsPersonLinesFill, BsPlus } from 'react-icons/bs';

import { useData } from '../../hooks/useData'
import api from '../../api/api';

import { NewDeviceModal } from './NewDeviceModal';

export function Devices() {

  const [devices , setDevices] = useState({});

  const { 
      setPageCategories, 
      pageCategories } = useData();

  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);

  const [formValues, setFormValues] = useState({});

  async function submitNewDeviceCategory(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    data.isNetDev = data.isNetDev == 'on' ? true : false

    let {data:creationResult} = await api.post("dispositivos/categoria/", data);
    
    console.log(creationResult);
  }

  useEffect(async ()=>{
    let {data: devicesList} = await api.get("/dispositivos");
    setDevices(devicesList);

    let {data: deviceCategories} = await api.get("/dispositivos/categorias");
    setPageCategories(deviceCategories);

    return () => setPageCategories({})
  }, [])

  let devCategory = pageCategories;
  let category = useParams();
  console.log(category)

  return (
    <StyledDevicesPage>
      <div className="left-side">
        <div className="container-head">
          <h3 className="title">
            Categorias
          </h3>
          {/* <button><BsPlus size="28" color="gray"/></button> */}
        </div>
        <div className="l-content">
          <ul className="pageCategoriesList">
            {
              devCategory.length > 0 
                ? devCategory.map( category => {
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
              <BsPlus/>
            </button>
            {
              isNewCategoryModalVisible &&
                <form onSubmit={submitNewDeviceCategory} className="new-category-modal  " >
                  <div>
                    <input 
                      // onChange={handleInputChange} 
                      id="new-category-title" 
                      type="text" 
                      placeholder="Título da categoria..." 
                      name="title"
                    />
                    <div className="input-group align-horizontal spaced">
                      <label htmlFor="isNetDev">Dispositivo de rede?</label>
                      <input 
                        // onChange={handleInputChange} 
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
            <h1 className="page-title">Dispositivos</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add device</button>
            </div>
          </div>
          {
            isModalVisible //NEW DEVICE MODAL
              && <NewDeviceModal devCategory={devCategory} closer={toggleVisibility}/> 
          }
          
          </div>
        <div className="pane-content">
          <DeviceList devices={devices}/>
        </div>

      </div>
      <div className="right-side">

      </div>
    </StyledDevicesPage>
  )
}

const DeviceList= ({devices})=> {
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
                  devices.map( (device) => {
                    return (
                      <tr>
                        <td>{device.alias}</td>
                        <td>{device.category}</td>
                        <td>{device.ip}</td>
                        <td>{device.setor}</td>
                        <td>
                          <div className="device-tools" >
                            <button><BsLink45Deg size="24" /></button>
                            <button><BsPersonLinesFill size="24" /></button>
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