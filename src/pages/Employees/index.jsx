import { EmployeesStyled } from "./styled";
import { ContentPane } from '../../components/ContentPane'

import userDataIcon from '../../assets/icon/user-data.svg'



export function Employees() {
  return(
    <EmployeesStyled>
      <ContentPane
        singleContainer
        medium
        title="Employees"
      >
        {/* TODO
          ADD    */}
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
        


      </ContentPane>
    </EmployeesStyled>
    
  )
}