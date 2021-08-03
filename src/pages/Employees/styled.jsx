import styled from 'styled-components'
import { ContentPane } from '../../components/ContentPane'

export const EmployeesStyled = styled.div`
  #employees-table {
    display: flex;
    flex-direction: column;
    
    thead, tbody {
      
      width: 100%;
      background-color: aliceblue;
    }
    thead, tr {
      display: grid;
      grid-template-columns: repeat(3, 2fr);

      justify-items: center;
      

    }
  }
`