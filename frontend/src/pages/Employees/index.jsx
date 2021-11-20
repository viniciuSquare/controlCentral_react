import { EmployeesStyled } from "./styled";

import userDataIcon from '../../assets/Icon/user-data.svg'
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

import api from '../../api/api.js'
import { FormStyled } from "../../components/FormContent/styled";

export function Employees() {
  const [ isModalVisible, setIsModalVisible ] = useState();
  const toggleVisibility = () => setIsModalVisible(!isModalVisible)

  const [ isNewCategoryModalVisible, setIsNewCategoryModalVisible ] = useState();
  const toggleNewCategoryModalVisibility = () => setIsNewCategoryModalVisible(!isNewCategoryModalVisible);

  const [ employees, setEmployees ] = useState({})
  useEffect(async()=>{
    const {data: usersList} = await api.get('/usuarios');
    setEmployees(usersList);
    console.log(usersList)
  }, [])

  return(
    <EmployeesStyled>
      <div className="left-side">
        
      </div>
      <div className="pane-content">
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title">Colaboradores</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={toggleVisibility} > Add device</button>
            </div>
          </div>
          {
            isModalVisible //NEW DEVICE MODAL
              && <NewEmployeeForm closer={toggleVisibility}/> 
          }
          
        </div>
        <table id="employees-table">
          <thead>
            <th>Department</th>
            <th>User</th>
            <th>Options</th>
          </thead>
          <tbody>
            {
              employees.length > 1 &&
                employees?.map( employee => {
                  return(
                    <tr kay={employee.id}>
                      <td>{employee.department.title}</td>
                      <td>{employee.name}</td>
                      <td>
                        <button>
                          <img src={userDataIcon} alt="" />
                        </button>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>

        </table>
      </div>
      <div className="right-side">
        
      </div>
    </EmployeesStyled>
    
  )
}

const NewEmployeeForm= ()=> {

  const[locations, setLocations] = useState({})

  useEffect(async()=>{
    const {data: locationsList} = await api.get('locais');
    setLocations(locationsList);

  },[])

  const [isToCreateNewLocation, setIsToCreateNewLocation] = useState(false);
  const toggleNewLocationFormVisibility = ()=> setIsToCreateNewLocation(!isToCreateNewLocation);
  const handleLocationSelection = (event)=>{
    if(event.target.value=="new" && !isToCreateNewLocation) 
      toggleNewLocationFormVisibility()
    else if(event.target.value != "new" && isToCreateNewLocation) 
      toggleNewLocationFormVisibility()

  }

  return(
    <Modal>
      <FormStyled>
        <h1 id="form-title">Novo usuário</h1>
        <form>
          <h3 className="field-group-name title" >
            Dados do usuário
          </h3>
          <div className="input-group">
            <div className="wrapper input">
              <label htmlFor="first-name">Nome completo</label>
              <input type="text" name="first-name" />
            </div>
            <div className="wrapper input">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
            </div>
          </div>
          <div className="input-group">

            <div className="wrapper">
              <label htmlFor="location">Local de atuação</label>
              <select type="text" name="location" onChange={handleLocationSelection}>
                {/* TODO */}
                <option value="select" defaultChecked="true" disabled >Selecione a categoria</option>
                <option value="new" >**Criar novo local/setor**</option>
                { 
                  locations.length>0 &&
                  locations.map(location => {
                    return(
                      <option value={location.id}> {location.title}</option>
                      )
                    })
                  }

              </select>
            </div>
          </div>
          {
            isToCreateNewLocation &&
              (
                <div>
                  <h3 className="field-group-name title" >
                    Dados do local/setor
                  </h3>
                  <div className="wrapper input">
                    <label htmlFor="location-title">Título</label>
                    <input type="text" name="location-title" />
                  </div>
                  <div className="wrapper input">
                    <label htmlFor="location-description">Descrição</label>
                    <input type="text" name="location-description" />
                  </div>
                </div>

              )
          }
          <button type="submit" id="submit-btn">Enviar</button>
        </form>
      </FormStyled>
    </Modal>
  )

}