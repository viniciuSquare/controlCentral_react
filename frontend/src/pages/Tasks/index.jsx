import { useEffect, useState } from "react";

import NewTaskModal from "./NewTaskModal";

import {StyledDataPage } from '../Base/styled';

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
    <StyledDataPage>
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
        <div className="head">
          <div className="title-n-tools">
            <h1 className="page-title title">Tarefas</h1>
            <div className="tools">
              <input type="text" />
              <hr className="vertical" />
              <button onClick={ toggleNewTaskModalVisibility } > Add task</button>
            </div>
          </div>          
        </div>

        <div className="pane-content">
          <TaskList/>
        </div>
        <div className="preview-pane">
          
        </div>
      </div>

      <div className="right-side">
        <button>Hoje</button>  
        <button>Pendente</button>  
      </div>
    </StyledDataPage>
  )

}

const TaskList = () => {
  return(
    <table id="tasks-listage">
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
  )
}
