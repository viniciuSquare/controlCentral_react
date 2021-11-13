import { useEffect, useState } from 'react'
import { StyledDevicesPage } from "./styled";

import { ContentPane } from '../../components/ContentPane'


import { useData } from '../../hooks/useData'

import { NewDeviceModal } from './NewDeviceModal';
import { BsPlus } from 'react-icons/bs';

import { NavLink, useParams } from 'react-router-dom';


export function Devices() {

  const { 
    devices,
    setPageCategories, 
    getDevicesCategories } = useData();
  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  useEffect(()=>{
    setPageCategories(getDevicesCategories());

    return () => setPageCategories({})
  },[])

  let devCategory = getDevicesCategories()
  let category = useParams();
  console.log(category)

  return (
    <StyledDevicesPage className="visual-test">
      <div className="left-side">
        <div className="container-head">
          <h2 className="title">
            Categorias
          </h2>
          <button><BsPlus size="28" color="gray"/></button>
        </div>
        <div className="content">
          <ul className="pageCategoriesList">
          {
            devCategory.length > 0 ? devCategory.map( category => {
              return (
                <li 
                  style={{display:"flex"}}
                  className="pageCategoryLink"
                >
                  <h4 className="category-initial-letter" >{category[0]}</h4>
                  <NavLink to={`/dispositivos/${category}`} >{category}</NavLink>
                </li>
              )
            }) : null
          }
          </ul>
        </div>
      </div>
      <div className="container-pane">
        <div className="head">
          <div className="list-head">
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
          <div className="pane-content">
            <table>
              <thead>
                <th>Categoria</th>
                <th>Usuário</th>
                <th>Setor</th>
                <th>IP</th>
                <th>Ferramentas</th>
              </thead>
              <tbody>
                {
                  devices.length > 0 
                    ? (
                        devices.map( (dev) => {
                          return (
                            <tr>
                              <td>{dev.name}</td>
                              <td>{dev.category}</td>
                              <td>{dev.ip}</td>
                              <td>{dev.setor}</td>
                              <td>
                                <div>
                                  <button>Details</button>
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
          </div>

        </div>

      </div>
      {/* <ContentPane 
        singleContainer
        title={
          <div className="list-head">
            <h1 className="page-title">Dispositivos</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add device</button>
            </div>

          </div>
        }>
        {
          isModalVisible //NEW DEVICE MODAL
            && <NewDeviceModal devCategory={devCategory} closer={toggleVisibility}/> 
        }
        <table>
          <thead>
            <th>Categoria</th>
            <th>Usuário</th>
            <th>Setor</th>
            <th>IP</th>
            <th>Ferramentas</th>
          </thead>
          <tbody>
            {
              devices.length > 0 
                ? (
                    devices.map( (dev) => {
                      return (
                        <tr>
                          <td>{dev.name}</td>
                          <td>{dev.category}</td>
                          <td>{dev.ip}</td>
                          <td>{dev.setor}</td>
                          <td>
                            <div>
                              <button>Details</button>
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
      </ContentPane> */}
      <div className="right-side">

      </div>
    </StyledDevicesPage>
  )
}

