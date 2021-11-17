import { EmployeesStyled } from "./styled";
import { ContentPane } from '../../components/ContentPane'

import userDataIcon from '../../assets/Icon/user-data.svg'



export function Employees() {
  return(
    <EmployeesStyled>
      <div className="left-side">
        
      </div>
      <div className="pane-content">
        <table id="employees-table">
          <thead>
            <th>Department</th>
            <th>User</th>
            <th>Options</th>
          </thead>
          <tbody>
            <tr>
              <td>TI</td>
              <td>Vinícius Quadrado</td>
              <td>
                <button>
                  <img src={userDataIcon} alt="" />
                </button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <div className="right-side">
        
      </div>
    </EmployeesStyled>
    
  )
}