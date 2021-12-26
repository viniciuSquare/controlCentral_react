import styled from 'styled-components'

export const EmployeesStyled = styled.div`
  display: grid;
  grid-template-columns: 20% auto 10%;

  .pane-content{
    width: 100%;
  }

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