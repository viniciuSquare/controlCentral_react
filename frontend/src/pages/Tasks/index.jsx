import { useEffect, useState } from "react";

import NewTaskModal from "./NewTaskModal";

import plusIcon from '../../assets/buttons/plus.svg'
import settingIcon from '../../assets/buttons/setting-icon.svg'
import { TasksStyled } from "./styled"

import api from "../../api/api";
import TaskSettingsModal from "./TaskSettingsModal";

export function Tasks() {
  const [ isNewTaskModalVisible, setIsNewTaskModalVisible ] = useState(false);
  const toggleNewTaskModalVisibility = () => setIsNewTaskModalVisible(!isNewTaskModalVisible)
  
  const [ isTaskSettingsModalVisible, setIsTaskSettingsModalVisible ] = useState(false);
  const toggleTaskSettingsModalVisibility = () => setIsTaskSettingsModalVisible(!isTaskSettingsModalVisible)

  const [ tasksData, setTasksData ] = useState("");

  useEffect( async function() {
    let response = await api.get("tasks")
    setTasksData(response)
    console.log(response)

  }, [])

  return (
    <TasksStyled>
      {
        isNewTaskModalVisible &&
          <NewTaskModal closer={toggleNewTaskModalVisibility} />
      }
      {
        isTaskSettingsModalVisible &&
          <TaskSettingsModal closer={toggleTaskSettingsModalVisibility}/>
      }
      <div className="left-side">

      </div>
      <div className="container-pane">
        <div className="list-head">
          <div className="title-n-tools">
            <h2 id="title">Tarefas</h2>
            <div className="filters">
              <button className="filter-btn">Todas</button>  
              <button className="filter-btn">Hoje</button>  
              <button className="filter-btn">Pendente</button> 
            </div>
            <div className="buttons-container">
              <button 
                onClick={ toggleNewTaskModalVisibility }>
                <span>
                  <img src={plusIcon} alt="Add task" />
                </span>
              </button>

              <button 
                onClick={ toggleTaskSettingsModalVisibility }>
                <span>
                  <img src={settingIcon} alt="Add task" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <th className="task-id" >Id</th>
            <th className="task-title" >Assunto</th>
            <th className="task-lastUpdate" >Setor/Local</th>
            {/* <th className="task-createdBy" >Created by</th> */}
            <th className="task-category" >Categoria</th>
            <th className="task-createdAt" >Created at</th>
            <th className="task-status" >Status</th>
          </thead>
          <tbody>
            <tr>
              <td className="task-id" >RH-0214</td>
              <td className="task-title" >Printer problem</td>
              {/* <td className="task-createdBy" >Reinaldo - RH</td> */}
              <td className="task-category"> Categoria</td>
              <td className="task-createdAt" >02 jul</td>
              <td className="task-status in-progress" >In progress</td>
              <td className="task-lastUpdate" >08 jul</td>
            </tr>
            <tr>
              <td className="task-id" >RH-0214</td>
              <td className="task-title" >Printer problem</td>
              {/* <td className="task-createdBy" >Reinaldo - RH</td> */}
              <td className="task-category"> Categoria</td>
              <td className="task-createdAt" >02 jul</td>
              <td className="task-status in-progress" >In progress</td>
              <td className="task-lastUpdate" >08 jul</td>
            </tr>
          </tbody>
        </table>
        <div className="preview-pane">
          
        </div>
      </div>

      <div className="right-side">
        <button>Hoje</button>  
        <button>Pendente</button>  
      </div>
    </TasksStyled>
  )

}

