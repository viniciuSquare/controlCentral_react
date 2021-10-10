import { TaskStyled } from "./styled";

import clockIcon from '../../assets/Icon/clock-history.svg'

/**
 * TASK {
 *  title
 *  creator
 *  department ??
 *  createdAt
 *  lastUpdate
 *  status
 * 
 *  isEsolution
 *  eSolutionTicket
 * } 
 * **/

export function Task() {
  return(
    <TaskStyled className="task">
      <div className="task-head">
        <h2 className="task-title" >Printer problem</h2>
        {/* <span className="task-type" > Support </span> */}
        <div className="task-lastUpdate">
          <strong>Last update:</strong> <p>Took to clean by viniciusq</p>
        </div>
      </div>

      <div className="task-footer">
        <div className="task-status">
          <div>
            <img src={clockIcon} alt="" />
            <p>Created at <strong>01 jul</strong></p>

          </div>
          
          <p className="task-requester" >RH - <span>Reinaldo</span></p>
        </div>

        <span className="status" > In progress </span>
      </div>

    </TaskStyled>
  )
}