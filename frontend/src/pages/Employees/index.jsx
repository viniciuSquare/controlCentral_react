import { EmployeesStyled } from "./styled";

import userDataIcon from '../../assets/Icon/user-data.svg'
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

import api from '../../api/api.js'
import { FormStyled } from "../../components/FormContent/styled";
import { StyledDataPage } from "../Base/styled";
import { Link } from "react-router-dom";
import { BiDevices } from "react-icons/bi";

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
    <StyledDataPage>
      <div className="left-side">
        
      </div>
      <div className="container-pane">
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
        <div className="pane-content">
          <EmployeesList data={employees}/>
        </div>
      </div>
      <div className="right-side">
        
      </div>
    </StyledDataPage>
    
  )
}

const NewEmployeeForm= ({closer})=> {

  const[locations, setLocations] = useState({})

  useEffect(async()=>{
    const {data: locationsList} = await api.get('locais');
    setLocations(locationsList);

  },[])

  // FORM SUBMITTION
  async function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)

    if(data["location"] == "new") {
      data.location = {
        title: data["location-title"],
        description: data["location-description"]
      }
    }
    delete data["location-title"];
    delete data["location-description"];

    let {data:creationResult, status} = await api.post("usuarios/", data);
    if(status == 200 || status == 201) {
      closer();
    }
    
    console.log(creationResult);
  } 

  const [isToCreateNewLocation, setIsToCreateNewLocation] = useState(true);
  const toggleNewLocationFormVisibility = ()=> setIsToCreateNewLocation(!isToCreateNewLocation);
  const handleLocationSelection = (event)=>{
    if(event.target.value=="new" && !isToCreateNewLocation) 
      toggleNewLocationFormVisibility()
    else if(event.target.value != "new" && isToCreateNewLocation) 
      toggleNewLocationFormVisibility()

  }

  return(
    <Modal toggleVisibility={closer}>
      <FormStyled>
        <h1 id="form-title">Novo usuário</h1>
        <form onSubmit={submit}>
          <h3 className="field-group-name title" >
            Dados do usuário
          </h3>
          <div className="input-group">
            <div className="wrapper input">
              <label htmlFor="name">Nome completo</label>
              <input type="text" name="name" />
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

const EmployeesList = ({data}) => {
  return(
    <table id="employees-listage">
      <thead>
        <th>User</th>
        <th>Department</th>
        <th>Options</th>
      </thead>
      <tbody>
        {
          data.length > 1 &&
            data?.map( employee => {
              return(
                <tr kay={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.department.title}</td>
                  <td>
                    <Link><BiDevices size="24"/>{employee.DeviceUser?.length || 0}</Link>
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
  )
}