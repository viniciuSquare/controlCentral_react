import { ContentPane } from "../../components/ContentPane"
import { TasksStyled } from "./styled"

import plusBtn from '../../assets/buttons/plus.svg'

export function Tasks() {
  return (
    <TasksStyled>
      <ContentPane 
        title={
          <>
            <h2>Tarefas</h2>

            <button>
              <span>
                <img src={plusBtn} alt="" />
              </span>
            </button>
          </>
        } 
        main
        medium
        singleContainer
      >
        <table>
          <thead>
            <th className="task-title" >Title</th>
            <th className="task-createdBy" >Created by</th>
            <th className="task-createdAt" >Created at</th>
            <th className="task-status" >Status</th>
            <th className="task-lastUpdate" >Last update</th>
          </thead>
          <tbody>
            <tr>
              <td className="task-title" >Printer problem</td>
              <td className="task-createdBy" >Reinaldo - RH</td>
              <td className="task-createdAt" >02 jul</td>
              <td className="task-status in-progress" >In progress</td>
              <td className="task-lastUpdate" >08 jul</td>
            </tr>
            <tr>
              <td className="task-title" >Printer problem</td>
              <td className="task-createdBy" >Reinaldo - RH</td>
              <td className="task-createdAt" >02 jul</td>
              <td className="task-status in-progress" >In progress</td>
              <td className="task-lastUpdate" >08 jul</td>
            </tr>
          </tbody>
        </table>
        
      </ContentPane>
    </TasksStyled>
  )

}